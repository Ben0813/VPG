import { Sequelize } from 'sequelize';
import config from '../config.js';

export const sequelize = new Sequelize({
  database: 'database_development',
  username: 'root',
  password: null,
  host: '127.0.0.1',
  dialect: 'mysql'
});

export default sequelize;
