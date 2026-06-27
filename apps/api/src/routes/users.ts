import { Router } from "express";
import { listUsers, createUser } from "../services/userService";

const router = Router();

/**
 * GET /users
 *
 * Returns the full list of users.
 */
router.get("/", async (_req, res) => {
  const result = await listUsers();
  res.json(result);
});

/**
 * POST /users
 *
 * Creates a new user from the request body.
 */
router.post("/", async (req, res) => {
  const result = await createUser(req.body);
  res.status(201).json(result);
});

export default router;
