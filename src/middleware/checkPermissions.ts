import { NextFunction, Request, Response, RequestHandler } from "express";
import { fakeData } from "../data/fakeData";
import { User } from "../types/user";

export const checkPermissions = (action: string): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const canDelete = req.headers["x-user-delete"];
    const canUpdate = req.headers["x-user-update"];
    const { id } = req.params;
    const user = fakeData.find((user: User) => user.id === Number(id));

    if (!user) {
      res.status(404).send("User not found");
    } else if (action === "delete" && !canDelete) {
      res.status(403).send("User does not have permission to delete users");
    } else if (action === "update" && !canUpdate) {
      res.status(403).send("User does not have permission to update users");
    } else {
      next();
    }
  };
};
