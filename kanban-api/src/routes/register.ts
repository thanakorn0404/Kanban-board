import { Router, Request, Response } from "express";
import prisma from "../database/PrismaClient";
import Users from "../database/schema/users";
import * as bcrypt from "bcrypt";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const users = new Users();
  users.username = req.body.username;
  users.password = req.body.password;

  const user_data = await prisma.users.findFirst({
    where: { username: users.username },
  });

  const is_username_valid: string = user_data?.username!;
  if (is_username_valid) {
    res.status(400).json({ message: "Username is already taken" });
  } else {
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(users.password, salt);
    res.status(200).json(
      await prisma.users.create({
        data: { username: users.username, password: String(hash_password) },
      })
    );
  }
});

export default router;
