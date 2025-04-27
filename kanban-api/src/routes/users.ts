import { Router, Request, Response } from "express";
import prisma from "../database/PrismaClient";
import Users from "../database/schema/users";
import * as bcrypt from "bcrypt";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await prisma.users.findMany({});
  res.status(200).json({ users });
});

router.get("/:id", async (req: Request, res: Response) => {
  const user_id: number = Number(req.params.id);
  res.status(200).json(await prisma.users.findFirst({ where: { id: user_id } }));
});

router.post("/", async (req: Request, res: Response) => {
  const users = new Users();
  users.username = req.body.username;
  users.password = req.body.username;

  const user_data = await prisma.users.findFirst({
    where: { username: users.username },
  });
  const is_username_valid: string = user_data?.username!;
  if (is_username_valid) res.status(200).json({ message: "username is valid." });

  const salt = await bcrypt.genSalt(10);
  const hash_password = await bcrypt.hash(users.password, salt);
  res.status(200).json(
    await prisma.users.create({
      data: { username: users.username, password: String(hash_password) },
    })
  );
});

router.put("/", async (req: Request, res: Response) => {
  const users = new Users();
  users.id = req.body.id;
  users.password = req.body.password;
  await prisma.users.update({
    where: { id: users.id },
    data: { password: users.password },
  });
  res.status(200).json();
});

export default router;
