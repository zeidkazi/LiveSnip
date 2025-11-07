import { Router } from "express";
import { Controller } from "./name.controller.js";

export const featureRouter = Router();

featureRouter.post("/yourRoute", Controller.testFunction);
