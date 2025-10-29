export interface  Emprunt{
    id : number;
    userId : number;
    bookId : number;
    borrowedAt : Date;
    dueDate : Date;
}

export const emprunts : Emprunt[] = [];