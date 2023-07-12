import { sequelize } from './index.js';
import { Model, DataTypes } from 'sequelize';

class Testimonial extends Model {}

    Testimonial.init({
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        name: {
        type: DataTypes.STRING,
        allowNull: false
        },
        comment: {
        type: DataTypes.TEXT,
        allowNull: false
        },
        rating: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
        approved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
        },
        userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users', // 'Users' refers to table name
            key: 'id', 
        },
        allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Testimonial',
    });

export default Testimonial;