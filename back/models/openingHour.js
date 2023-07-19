import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index.js";

class OpeningHour extends Model {}

OpeningHour.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    dayOfWeek: {
      type: DataTypes.ENUM(
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche"
      ),
      allowNull: false,
    },
    openTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    closeTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    secondOpenTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    secondCloseTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "OpeningHour",
  }
);

export default OpeningHour;
