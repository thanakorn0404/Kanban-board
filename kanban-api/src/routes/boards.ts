import { Router, Request, Response } from "express";
import prisma from "../database/PrismaClient";
import Boards from "../database/schema/boards";
import Stages from "../database/schema/stages";
import Invites from "../database/schema/invites";
import Tasks from "../database/schema/tasks";
import Messages from "../database/schema/messages";
import TaskPriviles from "../database/schema/task_priviles";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.status(200).json(await prisma.boards.findMany({}));
});

router.get("/:id", async (req: Request, res: Response) => {
  const boards = new Boards();
  boards.id = req.body.id;
  res.status(200).json(await prisma.boards.findFirst({ where: { id: boards.id } }));
});

router.get("/stage/:id", async (req: Request, res: Response) => {
  const stages = new Stages();
  stages.board_id = Number(req.params.id);
  res
    .status(200)
    .json(await prisma.stages.findMany({ where: { board_id: stages.board_id } }));
});

router.get("/invite/:id", async (req: Request, res: Response) => {
  const invites = new Invites();
  invites.board_id = Number(req.params.id);
  res
    .status(200)
    .json(await prisma.invites.findMany({ where: { board_id: invites.board_id } }));
});

router.get("/task/:id", async (req: Request, res: Response) => {
  const tasks = new Tasks();
  tasks.board_id = Number(req.params.id);
  res
    .status(200)
    .json(await prisma.tasks.findMany({ where: { board_id: tasks.board_id } }));
});

router.get("/task/message/:id", async (req: Request, res: Response) => {
  const msg = new Messages();
  msg.task_id = Number(req.params.id);
  res
    .status(200)
    .json(await prisma.messages.findMany({ where: { task_id: msg.task_id } }));
});

router.get("/task/user_privile/:id", async (req: Request, res: Response) => {
  const task_previles = new TaskPriviles();
  task_previles.user_id = Number(req.params.id);
  res
    .status(200)
    .json(
      await prisma.task_previles.findMany({ where: { user_id: task_previles.task_id } })
    );
});

router.post("/", async (req: Request, res: Response) => {
  const boards = new Boards();
  boards.user_id = req.body.user_id;
  boards.title = req.body.title;
  boards.description = req.body.description;
  res.status(201).json(
    await prisma.boards.create({
      data: {
        user_id: boards.user_id,
        title: boards.title,
        description: boards.description,
        create_at: boards.create_at,
      },
    })
  );
});

router.post("/stage/:id", async (req: Request, res: Response) => {
  const stages = new Stages();
  stages.board_id = Number(req.params.id);
  stages.name = req.body.stage_name;
  res.status(201).json(
    await prisma.stages.create({
      data: { board_id: stages.board_id, name: stages.name },
    })
  );
});

router.post("/task/:id", async (req: Request, res: Response) => {
  const tasks = new Tasks();
  tasks.board_id = Number(req.params.id);
  tasks.user_id = req.body.user_id;
  tasks.stage_id = req.body.stage_id;
  tasks.title = req.body.title;
  tasks.description = req.body.description;
  tasks.due_date = new Date(req.body.due_date);
  res.status(201).json(
    await prisma.tasks.create({
      data: {
        user_id: tasks.user_id,
        board_id: tasks.board_id,
        stage_id: tasks.stage_id,
        title: tasks.title,
        description: tasks.description,
        due_date: tasks.due_date,
      },
    })
  );
});

router.post("/task/message/:id", async (req: Request, res: Response) => {
  const msg = new Messages();
  msg.task_id = Number(req.params.id);
  msg.user_id = req.body.user_id;
  msg.message = req.body.message;
  res.status(201).json(
    await prisma.messages.create({
      data: { task_id: msg.task_id, user_id: msg.user_id, message: msg.message },
    })
  );
});

router.post("/task/add_user/:id", async (req: Request, res: Response) => {
  const task_priviles = new TaskPriviles();
  task_priviles.task_id = Number(req.params.id);
  task_priviles.user_id = req.body.user_id;
  res.status(201).json(
    await prisma.task_previles.create({
      data: {
        task_id: task_priviles.task_id,
        user_id: task_priviles.user_id,
        add_time: task_priviles.add_time,
      },
    })
  );
});

router.put("/:id", async (req: Request, res: Response) => {
  const boards = new Boards();
  boards.id = Number(req.params.id);
  boards.title = req.body.title;
  boards.description = req.body.description;
  await prisma.boards.update({
    where: { id: boards.id },
    data: { title: boards.title, description: boards.description },
  });
  res.status(200).json();
});

router.put("/stage/:id", async (req: Request, res: Response) => {
  const stages = new Stages();
  stages.id = Number(req.params.id);
  stages.name = req.body.stage_name;
  await prisma.stages.update({ where: { id: stages.id }, data: { name: stages.name } });
  res.status(200).json();
});

router.put("/task/:id", async (req: Request, res: Response) => {
  const tasks = new Tasks();
  tasks.id = Number(req.params.id);
  tasks.title = req.body.title;
  tasks.description = req.body.description;
  tasks.due_date = new Date(req.body.due_date);
  await prisma.tasks.update({
    where: { id: tasks.id },
    data: {
      title: tasks.title,
      description: tasks.description,
      due_date: tasks.due_date,
    },
  });
  res.status(200).json();
});

router.put("/task/message/:id", async (req: Request, res: Response) => {
  const msg = new Messages();
  msg.id = Number(req.params.id);
  msg.like_count += req.body.like_count;
  await prisma.messages.update({
    where: { id: msg.id },
    data: { like_count: msg.like_count },
  });
  res.status(200).json();
});

router.delete("/:id", async (req: Request, res: Response) => {
  const boards = new Boards();
  boards.id = Number(req.params.id);
  await prisma.boards.delete({ where: { id: boards.id } });
  res.status(200).json();
});

router.delete("/stage/:id", async (req: Request, res: Response) => {
  const stages = new Stages();
  stages.id = Number(req.params.id);
  await prisma.stages.delete({ where: { id: stages.id } });
  res.status(200).json();
});

router.delete("/task/:id", async (req: Request, res: Response) => {
  const tasks = new Tasks();
  tasks.id = Number(req.params.id);
  await prisma.tasks.delete({ where: { id: tasks.id } });
  res.status(200).json();
});

router.delete("/task/message/:id", async (req: Request, res: Response) => {
  const msg = new Messages();
  msg.id = Number(req.params.id);
  await prisma.messages.delete({ where: { id: msg.id } });
  res.status(200).json();
});

export default router;
