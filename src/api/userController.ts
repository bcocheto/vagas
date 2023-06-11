import { Request, Response, NextFunction } from "express";
import { fakeData } from "../data/fakeData";
import { User } from "../types/user";

let userAccessCount: { [key: string]: number } = {};

const incrementUserAccessCount = (userId: number) => {
  if (userAccessCount[userId]) {
    userAccessCount[userId]++;
  } else {
    userAccessCount[userId] = 1;
  }
};

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const user: User | undefined = fakeData.find(
    (user: User) => user.id === Number(id)
  );

  if (!user) {
    return res.status(404).send("User not found");
  }

  incrementUserAccessCount(user.id);
  
  res.json(user);
};

export const getUsers = (req: Request, res: Response, _next: NextFunction) => {
  res.json(fakeData);
};


export const createUser = (req: Request, res: Response) => {
  const { name, job, permissions } = req.body;

  const newUser: User = {
    name,
    job,
    id: fakeData.length + 1,
    permissions: {
      canDelete: permissions?.canDelete || false,
      canUpdate: permissions?.canUpdate || false,
    },
  };

  fakeData.push(newUser);

  res.status(201).json(newUser);
};

export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const index = fakeData.findIndex((user: User) => user.id === Number(id));

  if (index === -1) {
    res.status(404).send("User not found");
  } else {
    fakeData.splice(index, 1);
    res.send("User successfully deleted");
  }
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, job, permissions } = req.body;

  const user = fakeData.find((u: User) => u.id === Number(id));

  if (!user) {
    return res.status(404).send(req);
  }

  user.name = name;
  user.job = job;
  user.permissions = permissions;

  res.send(user);
};

export const getUserAccessCount = (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { id } = req.params;
  const userId = Number(id);

  const user = fakeData.find((user: User) => user.id === userId);

  if (!user) {
    return res.status(404).send("User not found");
  }

  const count = userAccessCount[userId] || 0;

  res.send(`Usuário com ID ${userId} foi lido ${count} vezes.`);
};