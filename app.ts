import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";

import {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserAccessCount,
} from "./src/api/userController";
import { checkPermissions } from "./src/middleware/checkPermissions";

const app: Express = express();

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", (req: Request, res: Response) => {
  res.send(`
    get user/ </br>
    get users/ </br>
    post users/ </br>
    delete users/ </br>
    put users/ </br>
  `);
});

app.get("/user", getUser);
app.get("/users", getUsers);
app.post("/users", createUser);
app.delete("/users", checkPermissions("delete"), deleteUser);
app.put("/users", checkPermissions("update"), updateUser);
app.get("/users/access", getUserAccessCount);

const port = 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
