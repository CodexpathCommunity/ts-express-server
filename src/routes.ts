import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import {
  createUserSchema,
  createUserSessionSchema,
} from "./schema/user.schema";
import {
  createUserSessionHandler,
  invalidateUserSessionHandler,
} from "./controller/session.controller";
import { requiresUser, validateRequest } from "./middleware";

export default function (app: Express) {
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
  });

  //register user
  app.post(
    "/api/v1/user",
    validateRequest(createUserSchema),
    createUserHandler
  );

  //create user session
  app.post(
    "/api/v1/sessions",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  //logout user
  app.delete("/api/v1/sessions", requiresUser, invalidateUserSessionHandler);
}
