import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('cyber_vault', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});


export default sequelize;
