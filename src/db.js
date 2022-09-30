import { createPool } from "mysql2/promise";

export const pool = createPool({
  user: "root",
  password: "faztpassword",
  host: "mymysql",
  database: "faztdb",
  port: 3306,
});
