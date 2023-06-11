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
    get /user/access:id </br>
    get /user/:id </br>
    get /users </br>
    post /users </br>
    put /user/:id </br>
    delete /user/:id </br>
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
