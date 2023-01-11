import { NextFunction, Request, response, Response, Router } from "express";
export  const router = Router();

router.get('/',getUser)
router.post('/',)
function getUser(req:Request,res:Response,next:NextFunction){
    response.json()
}

function post(req:Request,res:Response,next:NextFunction){
    const {username,password} = req.body; 
    
    response.send();
}