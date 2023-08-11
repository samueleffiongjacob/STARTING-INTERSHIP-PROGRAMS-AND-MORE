import dotenv from "dotenv";
dotenv.config();
export const prodkeys = {
    cookieSecret: process.env.NODE_ENV || ""
}

