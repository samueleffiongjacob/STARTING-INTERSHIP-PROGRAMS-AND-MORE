// IMPORTING SYSTEM DEPENDENCIES , THIRD PARTY MIDDLEWARES AND ROUTEs
import bodyParser from "body-parser";
import path from 'path';
import http from 'http';
import dotenv from "dotenv";
dotenv.config();
import { config } from '../src/config/config';
import { keys } from '../src/config/keys';
import Logging from '../src/utils/logging'
import express from "express";
import api from './router/api.routes'
// import { Request } from "express";
import  session  from 'express-session';
import MongoStore from 'connect-mongo'
import morgan from "morgan";
import cors from 'cors';
import cookieParser from "cookie-parser"; 


const app = express();
const {cookieSecret} = keys();

const Startapp = () => {
    /** Log the request */
    app.use((req, res, next) => {
        /** Log the req */
        Logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            /** Log the res */
            Logging.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });

        next();
    });
        // setting cokkies for live production

    //-momery unleaked---------
    app.set('trust proxy', 1);
    const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
    const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
    app.use(
      session({
         cookie: {
           secure: true,
           maxAge: 60* 24 * 60 * 60 * 10000,
           sameSite: "strict",
         },
         store: new MongoStore({mongoUrl:`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@ogidispearl-project-lim.lnh1fpn.mongodb.net/Ogidispearl-Project-Limited`}),
         secret: cookieSecret,
         saveUninitialized: true,
         resave: false,
      })
    )
        // json converter, loggers, url and cokkies
    app.use(bodyParser.json())
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(morgan("combined"));
    app.use(cookieParser());
    
    
    
    /**ORIGIN TO ACCEPT  Rules of our API */
    app.use(cors({origin:['https://ogidispearl-project-limited-peach.vercel.app'], credentials: true }));//, 'http://localhost:3000', 'http://localhost:3001'

    /** Routes */
    // only for docker
    // app.use(express.static(path.join(__dirname, '../client/out')));
    // app.use(express.static("out"));

    // only for package json file
    app.use(express.static(path.join(__dirname, "../client/public")));
    
    // api routes handler
    app.use("/v1", api);
    
    /** Healthcheck */
    app.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));

    // for docker file
    // app.get('/', (req,res) => { res.sendFile(path.join(__dirname, '../client/out/index.html'));});

    // package .son file
    app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, "..client/public/index.html"));
    });

    /** Error handling */
    app.use((req, res, next) => {
        const error = new Error('Not found');

        Logging.error(error);

        res.status(404).json({
            message: error.message
        });
    });

     http.createServer(app).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}`));
};



const servertapp = Startapp

export default  servertapp
