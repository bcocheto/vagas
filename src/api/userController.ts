import { Request, Response, NextFunction } from "express";
import { fakeData } from "../data/fakeData";
import { User } from "../types/user";

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.query;
  const user: User | undefined = fakeData.find(
    (user: User) => user.name === name
  );

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.json(user);
};

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  res.json(fakeData);
};

let userAccessCount: { [key: string]: number } = {};

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
  const { name } = req.query;

  const index = fakeData.findIndex((user: User) => user.name === name);

  if (index === -1) {
    res.status(404).send("User not found");
  } else {
    fakeData.splice(index, 1);
    res.send("User successfully deleted");
  }
};

export const updateUser = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.query;
  const { name, job } = req.body;

  const user = fakeData.find((d: User) => d.id === Number(id));

  if (!user) {
    res.status(404).send("User not found");
  } else {
    user.name = name;
    user.job = job;

    res.send(user);
  }
};

export const getUserAccessCount = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.query;
  const count = userAccessCount[name as string] || 0;

  res.send(`Usuário ${name} foi lido ${count} vezes.`);
};
