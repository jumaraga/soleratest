import { compare, hash } from "bcrypt"
import { find } from "../../database/db"


export function Controller() {
    async function findAndValidad(username:string,password:string){
        const data = await find()
        // compare(password,)
        return
    }

    return {
        findAndValidad
    }
}