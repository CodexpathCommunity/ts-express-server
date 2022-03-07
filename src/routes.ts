import { Express, Request, Response } from "express";
import validateRequest from "./middleware/validateRequest";
import { createUserHandler } from "./controller/user.controller";
import {
  createUserSchema,
  createUserSessionSchema,
} from "./schema/user.schema";
import { createUserSessionHandler } from "./controller/session.controller";

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
}
