import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validationSchema = (schema: AnyZodObject)=>{
    return async (req:Request, res:Response, next:NextFunction) => {
    try {
         schema.parseAsync(req.body);
        next()
    } catch (err) {
        next(err)
    }
}
}
