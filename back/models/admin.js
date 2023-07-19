import User from "./user.js";
import bcrypt from "bcryptjs";

async function createAdminUser() {
  const hashedPassword = await bcrypt.hash("VpgArAge20", 10);

  await User.create({
    id: 1,
    name: "Vincent",
    email: "vincent@vpgarage.com",
    password: hashedPassword,

    role: "admin",
  });

  console.log("Admin user created");
}

createAdminUser();
