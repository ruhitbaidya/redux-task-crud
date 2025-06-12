import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validationSchema = (schema: AnyZodObject)=>{
    return async (req:Request, res:Response, next:NextFunction) => {
    try {
        const finds = schema.parseAsync(req.body);
        console.log(finds)
        next()
    } catch (err) {
        next(err)
    }
}
}
