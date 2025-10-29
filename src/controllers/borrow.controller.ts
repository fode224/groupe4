import express , { Request, Response } from "express";
import { emprunts } from "../models/borrow.model";
import { isEmprunt } from "../utils/borrow.utils";
import { isValidBorrowData } from "../utils/borrow.utils";

const router = express.Router();

router.post("/",(req : Request, res: Response) => {
    const {userId, bookId} = req.body;

    if(! userId || !bookId){
        return res.status(400).json({message: "UserId and BookId is required"})
    }
    if (!isValidBorrowData(req.body)) {
    return res.status(400).json({ message: "userId and bookId are required" });
  }
    const emprunt ={
        id: emprunts.length +1,
        userId,
        bookId,
        borrowedAt : new Date(),
        dueDate : new Date(Date.now() + 14*24*60*60*1000),
    };
    if (!isEmprunt(emprunt)) {
    return res.status(500).json({ message: "Internal format error" });
  }
    emprunts.push(emprunt);
    res.status(201).json(emprunt);
});

router.put("/:id/prolong",(req: Request, res: Response) => {
  const { id } = req.params;
  const emprunt = emprunts.find(e => e.id === parseInt(id));

  if (!emprunt) return res.status(404).json({ message: "Borrow not found" });

  emprunt.dueDate = new Date(emprunt.dueDate.getTime() + 7 * 24 * 60 * 60 * 1000); 
  res.json(emprunt);
});

router.get("/", (req: Request, res: Response) => {
  res.json(emprunts);
});

export default router;