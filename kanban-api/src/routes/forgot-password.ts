import { Router, Request, Response } from "express";
import prisma from "../database/PrismaClient";
import Users from "../database/schema/users";
import * as bcrypt from "bcrypt";

const router = Router();

router.put("/", async (req: Request, res: Response) => {
  const users = new Users();
  users.id = req.body.id;
  users.password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const hash_password: string = await bcrypt.hash(users.password, salt);
  await prisma.users.update({
    where: { id: users.id },
    data: { password: hash_password },
  });
  res.status(200).json();
});

export default router;
