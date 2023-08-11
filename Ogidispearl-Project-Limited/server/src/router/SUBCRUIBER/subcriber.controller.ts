// IMPORTING DEPENDCY
import emailsubcriber from "../../models/emailsubcriber.mongo";
import mongoose from 'mongoose';
import { NextFunction, Request, Response } from 'express';
// import Joi, { ObjectSchema } from 'joi';
// import { ValidateJoi,Schemas } from '../../utils/joi';
import dotenv from 'dotenv';
dotenv.config();

// import Sib from "sib-api-v3-typescript"
const API_KEY = process.env.API_KEY || "";

//end of dependency above

//CREATING SUBCRIBE EMAIL
const createEmailSub = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { email } = req.body;

        if(!email){
            return res.status(400).json({
                status: 400,error: `Missing required Email Subcriber Property eg ${"info@ogidispearlprojectlimited.com"} Please enter email and  try again`,
            })
        }

        const oldsubcriber = await emailsubcriber.findOne({email})
        if(oldsubcriber){
            return res.status(409).json({
                status: 409, error: `A Email Subcriber with this email ${email} already exist...`,
            })
        }
        
        //ValidateJoi(Schemas.emailsubcriber.create)<= this validate mongoose string shemas 
        const newMail = new emailsubcriber( {
            _id: new mongoose.Types.ObjectId(),
            email
        })

        const newMail_1 = await newMail
            .save();
        // send registration successful using node mailer
       
        // SEND MAIL FUNCTION ENDS HERE

        // returning respose from server to user
        return res.status(201).json({ status: 201, success: `Dear Email Subcriber ${ newMail_1.email } You Have succesfully Subcribe to our emails...`})
    } catch (error) {
        return next(res.status(500).json({ status: 500, error: `SOMETHING WENT WRONG WITH OUR SERVER ${error} please try again`  }))
    }
};

// qury one emailsubcriber
const OneEmailSub = async (req: Request, res: Response, next: NextFunction) => {
    const newemailSubcriber= req.params.Id;

    try {
        const newMail = await emailsubcriber.findById(newemailSubcriber)
            .populate('newMail')
            .select('__v');
        return (newMail ? res.status(200).json({ status: 200, newMail }) : res.status(404).json({status: 404, message: 'not found' }))
    } catch (error) {
        return next(res.status(500).json({ status: 500,error: `SOMETHING WENT WRONG WITH OUR SERVER ${error} please try again`  }))
       
    }
};

// QURY ALL SUBCRIBER
const SeeAllEmailLSub = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newMail = await emailsubcriber.find({},{__id: 0, __v: 0});
        return res.status(200).json({ status: 200,newMail })
    } catch (error) {
        return next(res.status(500).json({ status: 500,error: `SOMETHING WENT WRONG WITH OUR SERVER ${error} please try again`  }));
    }
};


export default { createEmailSub, SeeAllEmailLSub, OneEmailSub  };

