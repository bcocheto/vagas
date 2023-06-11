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
    <h1>TesteDev API</h1>
    <ul>
      <li><a href="/users">GET /users</a></li>
      <li><a href="/user/:id">GET /user/:id</a></li>
      <li><a href="/user/access/:id">GET /user/access/:id</a></li>
      <li><a href="/users">POST /users</a></li>
      <li><a href="/user/:id">PUT /user/:id</a></li>
      <li><a href="/user/:id">DELETE /user/:id</a></li>
    </ul>
  `);
});

app.get("/user/:id", getUser);
app.get("/users", getUsers);
app.get("/user/access/:id", getUserAccessCount);
app.post("/users", createUser);
app.put("/user/:id", checkPermissions("update"), updateUser);
app.delete("/user/:id", checkPermissions("delete"), deleteUser);

const port = 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
