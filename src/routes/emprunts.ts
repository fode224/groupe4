import { Express, Router } from "express"
import { boorowBook , prolongBorrow , getAllBorrows } from "../controllers/emprunts.controller";

const router = Router();

router.post('/' , boorowBook);
router.put('/:id/prolong', prolongBorrow);
router.get('/', getAllBorrows);

export default router;