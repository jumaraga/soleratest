import { NextFunction, Request, Response, Router } from "express";
import { Controller } from "./contorller";
export const router = Router();

router.post('/', post)

async function post(req: Request, res: Response, next: NextFunction) {
    try {
        const { username, password } = req.body;
        if (!username || !password) throw new Error('bad request: password and username required').message;
        const data = await Controller().findAndValidad(username, password);
        if (!data) throw new Error('authentication fail').message;
        res.status(200).send({ message: '[server] success', data });
    } catch (e) {
        next({ message: e, status: 400 })
    }
}