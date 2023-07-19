//importing required modules
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import session from "express-session";

import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";

//importing models from routes
import { sequelize } from "./models/index.js";
import User from "./models/user.js";
import carRoutes from "./routes/cars.js";
import openingHourRoutes from "./routes/openingHours.js";
import serviceRoutes from "./routes/services.js";
import testimonialRoutes from "./routes/testimonials.js";

//hooks for password hashing
User.addHook("beforeCreate", async (user) => {
  if (user.password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

User.addHook("beforeUpdate", async (user) => {
  if (user.password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

AdminJS.registerAdapter(AdminJSSequelize);

//create express application
const app = express();

//using express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

//setting of AdminJS
const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: [
    {
      resource: User,
      options: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "admin",
      },
    },
  ],
});

//authenticated router
const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return false;
  },
  cookieName: "adminjs",
  cookiePassword: process.env.COOKIE_PASSWORD,
});

//using the router
app.use(adminJs.options.rootPath, router);

//using middleware
app.use(express.json());
app.use(cors());

//login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET
  );
  //adding the user's role to the response
  res.json({ token, role: user.role });
});

//authentication middleware
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

//using static files
app.use("/uploads", express.static("uploads"));

//using routes
app.use("/cars", carRoutes);
app.use("/openinghours", openingHourRoutes);
app.use("/services", serviceRoutes);
app.use("/testimonials", testimonialRoutes);

//synchronizing models and starting the server
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("All models were synchronized successfully.");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("An error occurred while synchronizing the models:", error);
  });

export default app;
