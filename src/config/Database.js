import { Sequelize } from "sequelize";

class Database {
  sequelize;

  constructor() {
    this.sequelize = new Sequelize(
      "postgresql://neondb_owner:npg_koU6DzcA9XWl@ep-small-cell-aduqhtrl-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
    , {
      dialect: "postgres",
      dialectModule: pg
    });
  }

  async startdb() {
    try {
      await this.sequelize.authenticate();
    } catch (error) {
      console.log(error);
    }
  }

  getSequelizeInstance() {
    return this.sequelize;
  }
}

const db = new Database();
export default db;
