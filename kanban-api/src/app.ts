import express from "express";
import "dotenv/config";
import cors from "cors";
import auth from "./middleware/auth";

// Route import
import usersRoute from "./routes/users";
import boardsRoute from "./routes/boards";
import invitesRoute from "./routes/invites";
import loginRoute from "./routes/login";

// middleware and cors
const app = express();
app.use(cors());
app.use(express.json());

// Route define
app.use("/api/v1/users", auth, usersRoute);
app.use("/api/v1/boards", auth, boardsRoute);
app.use("/api/v1/invites", auth, invitesRoute);
app.use("/login", loginRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
