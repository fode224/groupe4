import { Request, Response, Router } from "express";
import { Task } from "../models/task.model";
import { isTask } from "../utils/tasks.utils";

export const tasksController = Router();

const allTasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
];

/**
 * This function returns all the tasks
 */
tasksController.get("/", (req: Request, res: Response) => {
  console.log("[GET] /tasks/f");
  res.status(200).json(allTasks);
});


tasksController.post("/", (req: Request, res: Response) => {
  console.log("[POST] /doctors/");
  const task : Task = req.body;
  if(!isTask(task)) {
    res.status(400).send("Missing fields or invalid data");
    return;
  }
  task.id = allTasks.length + 1;
  allTasks.push(task);
  res.status(200).json(task);
});