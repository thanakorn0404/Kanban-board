import { Router, Request, Response } from "express";
import prisma from "../database/PrismaClient";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await prisma.users.findMany({});
  res.status(200).json({ users });
});

router.get("/:id", async (req: Request, res: Response) => {
  const user_id: number = Number(req.params.id);
  res.status(200).json(await prisma.users.findFirst({ where: { id: user_id } }));
});

export default router;
