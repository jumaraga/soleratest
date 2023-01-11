import { NextFunction, Request, response, Response, Router } from "express";
import { Controller } from "./contorller";
export  const router = Router();

router.get('/',post)
router.post('/',post)
function getUser(req:Request,res:Response,next:NextFunction){
    res.json()
}

async function post(req:Request,res:Response,next:NextFunction){
    const {username,password} = req.body; 
    const data = await Controller().findAndValidad(username,password);
    res.send({data});
}