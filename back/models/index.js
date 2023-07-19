import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);

export default sequelize;
