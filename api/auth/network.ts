import { NextFunction, Request, response, Response, Router } from "express";
export  const router = Router();

router.get('/',getUser)

function getUser(req:Request,res:Response,next:NextFunction){
    console.log('data')
    response.json()
}