import { Emprunt } from "../models/borrow.model";

export function isEmprunt(obj: any): obj is Emprunt {
  return (
    obj &&
    typeof obj.id === "number" &&
    typeof obj.userId === "number" &&
    typeof obj.bookId === "number" &&
    obj.borrowedAt instanceof Date &&
    obj.dueDate instanceof Date
  );
}

export function isValidBorrowData(data: any): boolean {
  return (
    data &&
    typeof data.userId === "number" &&
    typeof data.bookId === "number"
  );
}
