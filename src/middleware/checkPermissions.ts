import { NextFunction, Request, Response, RequestHandler } from "express";
import { fakeData } from "../data/fakeData";
import { User } from "../types/user";

export const checkPermissions = (action: string): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.query;

    const user = fakeData.find((user: User) => user.name === name);

    if (!user) {
      res.status(404).send("User not found");
    } else if (action === "delete" && !user.permissions.canDelete) {
      res.status(403).send("User does not have permission to delete users");
    } else if (action === "update" && !user.permissions.canUpdate) {
      res.status(403).send("User does not have permission to update users");
    } else {
      next();
    }
  };
};
