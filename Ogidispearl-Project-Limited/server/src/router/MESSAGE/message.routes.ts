//IMPORTING DEPENDENY

import express from "express"

import Contactcontrollers from "./message.controller"
// import {ValidateJoi, Schemas } from '../../utils/joi'
//the above to validate with schema models


// exporting routers
export const MessageRouter = express.Router();

//setting for knowing the endpoints/ip requsting
MessageRouter.use((req, res, next) => {
  console.log("ip address :", req.ip);
  next();
});


// endpoint to follow
MessageRouter.get("/", Contactcontrollers.SeeAllForm);
MessageRouter.get("/:formId", Contactcontrollers.SeeOneForm);
// MessageRouter.post("/", ValidateJoi(Schemas.contact.create),Contactcontrollers.createContactForm);
// the above to validate with schema models UpdateForm

MessageRouter.post("/", Contactcontrollers.createContactForm);
MessageRouter.patch("/", Contactcontrollers.UpdateForm);


