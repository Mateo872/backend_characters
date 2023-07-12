import { Router } from "express";
import {
  createCharacter,
  deleteCharacter,
  getCharacter,
  getCharacters,
  updateCharacter,
} from "../controllers/characters.controllers";

const router = Router();

router.route("/characters").get(getCharacters).post(createCharacter);
router
  .route("/characters/:id")
  .put(updateCharacter)
  .delete(deleteCharacter)
  .get(getCharacter);

export default router;
