import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

/**
 * @route POST /users/register
 * @desc let the user register on strimingly
 * @access Public
 */
router.route("/register").post(
  //register user call here from
  registerUser
);

export default router;
