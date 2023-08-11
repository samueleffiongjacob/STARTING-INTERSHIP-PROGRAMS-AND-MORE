//ImPORTING DEPENDENCY
import MESSAGE from "../../models/message.mongo";
import mongoose from 'mongoose';
import { NextFunction, Request, Response } from 'express';
// import Joi, { ObjectSchema } from 'joi';
// import { ValidateJoi,Schemas } from '../../utils/joi';
import Logging from '../../utils/logging'

import dotenv from 'dotenv';
dotenv.config();

// import Sib from "sib-api-v3-typescript" 
const API_KEY = process.env.API_KEY || "";

//end of dependency above

// CREATING FORM
const createContactForm = async (req: Request, res: Response, next: NextFunction) => {

    try {
        // accepting the body from axios
        const { name, email, message } = req.body;

        // checking for empty headers and return
        if(!name || !email || !message) {    
            const error = new Error("Missing required CONTACT Property Please try again")
            Logging.error(error);
            return res.status(400).json({
                status: 400, 
                error:error
            })
        }
        // checking for existing email but no more nessary becos of of update form function below line 90
        const userExist = await MESSAGE.exists({ email });
        if (userExist) {
            const error = new Error( `A Contact Form with this email ${email} already exist U can only update name And message with this email ${email}...`);
            Logging.error(error);

            res.status(409).json({
                status: 409,
                error: error
            });
        }
        
          
        //ValidateJoi(Schemas.contact.create) <= this validate mongoose string shemas 
        const newForm = new MESSAGE({
           _id: new mongoose.Types.ObjectId(),
           name,
           email,
           message,
        });

        
        return newForm
            .save()
            .then((newForm) => res.status(201).json({ status: 201, success: `Your  CONTACT Form with ${newForm.name} and ${ newForm.email } and message as been submit successfully...`  }))

         
        
        //send registration successful using node mailer
        
        // SEND MAIL FUNCTION ENDS HERE

        // returning respose from server to user
        
    } catch (error) {
        return next(res.status(500).json({ status: 500, error: `SOMETHING WENT WRONG WITH OUR SERVER ${error} please try again` }))
        
    }
};

// FINE ONE FORM
const SeeOneForm = async (req: Request, res: Response, next: NextFunction) => {
    const newFormId = req.params.Id

    try {
        const newForm = await MESSAGE.findById(newFormId)
            .populate('newForm')
            .select('__v');
        return (newForm ? res.status(200).json({status: 200, newForm }) : res.status(404).json({ message: 'not found' }))
    } catch (error) {
        return next(res.status(500).json({status: 500,error: `SOMETHING WENT WRONG WITH OUR SERVER ${error} please try again`  }))
        
    }
};

// FINE ALL FORM
const SeeAllForm = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newForm = await MESSAGE.find({},{__id: 0, __v: 0});
        return res.status(200).json({status: 200, newForm })
    } catch (error) {
        return next(res.status(500).json({ status: 500,error: `SOMETHING WENT WRONG WITH OUR SERVER ${error} please try again`  }))
    }
};

// update one form
const UpdateForm = async(req: Request, res: Response, next: NextFunction) => {
    //updating name and message with th new one 
    const {name, message } = req.body;
    MESSAGE.updateMany({name}, {message})
    const email = req.body.email

    return MESSAGE.findOne({email})
        .then((newForm) => {
            if (newForm) {
                newForm.set(req.body);

                return newForm
                    .save()
                    .then((newForm)=> res.status(201).json({ status: 201, success: `Your  CONTACT Form with ${newForm.name} and ${ email } and message as been updated successfully...`  }))
            }else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => next(res.status(500).json({ status: 500, error: `SOMETHING WENT WRONG WITH OUR SERVER ${error} please try again` })));
        
}


export default { createContactForm, SeeOneForm, SeeAllForm ,UpdateForm};
