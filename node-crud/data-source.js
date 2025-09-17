const { DataSource } = require("typeorm");
const path = require("path");
const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",      // change if needed
  password: "8jan2005",          // change if needed
  database: "userdb",
  synchronize: true,     // auto-create table if not exists
  logging: true,
  entities:[path.join(__dirname, "/Entity/*.js")],
});

module.exports = { AppDataSource };
