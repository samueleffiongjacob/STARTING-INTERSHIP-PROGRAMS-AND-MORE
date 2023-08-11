// IMPORTING SYSTEM DEPENDENCIES , THIRD PARTY MIDDLEWARES AND ROUTEs
import express from "express"
import { NextFunction, Request, Response } from 'express';

import subcriberController from "./subcriber.controller";
// import { ValidateJoi,Schemas } from '../../utils/joi';
// the above to validate with schema models

// exporting routers
export const SubcriberRouter = express.Router();

//setting for knowing the endpoints/ip requsting
SubcriberRouter.use((req: Request, res:Response, next: NextFunction ) => {
  console.log("ip address :", req.ip);
  next();
});

//emailsubcriber endpoint to follow
SubcriberRouter.get("/", subcriberController.SeeAllEmailLSub);
SubcriberRouter.get("/:emailId", subcriberController.OneEmailSub);
// SubcriberRouter.post("/", ValidateJoi(Schemas.emailsubcriber.create), subcriberController.createEmailSub);
// the above to validate with schema models
SubcriberRouter.post("/", subcriberController.createEmailSub);




