import { Router, Request, Response } from "express";
import prisma from "../database/PrismaClient";
import Users from "../database/schema/users";
import * as jose from "jose";
import * as bcrypt from "bcrypt";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const secret_key: Uint8Array = new TextEncoder().encode(process.env.API_KEY);
  const api_key = await new jose.SignJWT()
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(secret_key);

  const { username, password } = req.body;
  const user_data = await prisma.users.findFirst({ where: { username } });
  const users = new Users();
  users.username = user_data?.username!;
  users.password = user_data?.password!;

  if (!users.username) {
    res.status(400).json({ message: "The username you entered doesn’t exist" });
  }

  const is_password_valid: boolean = await bcrypt.compare(password, users.password);
  if (!is_password_valid)
    res.status(400).json({ message: "Incorrect password. Please try again" });

  res.status(200).json({ id: user_data?.id, username: users.username, api_key });
});

export default router;
