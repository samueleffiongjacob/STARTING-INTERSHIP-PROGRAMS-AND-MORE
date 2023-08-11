// IMPORTING SYSTEM DEPENDENCIES , THIRD PARTY MIDDLEWARES AND ROUTEs
import express from "express";

// IMPORTING RELEVANT ROUTERS FROM ROUTES FOLDERS
import {MessageRouter} from "./MESSAGE/message.routes"
import { SubcriberRouter } from "./SUBCRUIBER/subcriber.routes"

// USING EXPRESS ROUTER
const api = express.Router();

// SETING ROUTERS FOR EXPRESS TO USE IN RESPONSE
api.use("/subcriber", SubcriberRouter);
api.use("/message", MessageRouter);

export default api
    

