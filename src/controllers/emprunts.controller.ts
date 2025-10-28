import { Request, Response } from "express";
import { emprunts } from "../models/empruntModel";

export const boorowBook = (req : Request, res: Response) => {
    const {userId, bookId} = req.body;

    if(! userId || !bookId){
        return res.status(400).json({message: "UserId and BookId is required"})
    }
    const emprunt ={
        id: emprunts.length +1,
        userId,
        bookId,
        borrowedAt : new Date(),
        dueDate : new Date(Date.now() + 14*24*60*60*1000),
    };
    emprunts.push(emprunt);
    res.status(201).json(emprunt);
};
export const prolongBorrow = (req: Request, res: Response) => {
  const { id } = req.params;
  const emprunt = emprunts.find(e => e.id === parseInt(id));

  if (!emprunt) return res.status(404).json({ message: "Borrow not found" });

  emprunt.dueDate = new Date(emprunt.dueDate.getTime() + 7 * 24 * 60 * 60 * 1000); 
  res.json(emprunt);
};


export const getAllBorrows = (req: Request, res: Response) => {
  res.json(emprunts);
};