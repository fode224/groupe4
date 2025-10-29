// src/app.ts
import express from 'express';
import borrowRouter from "./controllers/borrow.controller";

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});

app.use("/api/emprunts", borrowRouter);

export default app;
