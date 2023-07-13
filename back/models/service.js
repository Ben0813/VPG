import { sequelize } from "./index.js";
import { Model, DataTypes } from "sequelize";

class Service extends Model {}

Service.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description_long: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users", // 'Users' refers to table name
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Service",
  }
);

export default Service;
