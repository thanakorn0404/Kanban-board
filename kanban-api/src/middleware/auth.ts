import { Request, Response, NextFunction } from "express";
import * as jose from "jose";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const api_key: any = req.headers["api-key"];
  const secret_key: Uint8Array = new TextEncoder().encode(process.env.API_KEY);
  if (!api_key) res.status(401).json({ message: "api-key is not define." });

  try {
    await jose.jwtVerify(api_key, secret_key);
  } catch (error) {
    res.status(403).json({ message: "Unable api-key." });
  }
  next();
}
