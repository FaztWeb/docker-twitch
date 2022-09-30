import express from "express";
import User from "./models/User.js";
import { pool } from "./db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.get("/users", async (req, res) => {
  const newUser = await User.create({
    username: "johndoe",
    password: "123456",
  });

  res.json(newUser);
});

app.get("/ping", async (req, res) => {
  const [result] = await pool.query('SELECT "pong" as RESULT');
  res.json(result);
});

export default app;