import { Router, Request, Response } from "express";
import prisma from "../database/PrismaClient";
import Invites from "../database/schema/invites";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const invites = new Invites();
  invites.user_id = req.body.user_id;
  invites.board_id = req.body.board_id;
  invites.message = req.body.message;
  res.status(201).json(
    await prisma.invites.create({
      data: {
        user_id: invites.user_id,
        board_id: invites.board_id,
        message: invites.message,
        create_at: invites.create_at,
      },
    })
  );
});

export default router;
