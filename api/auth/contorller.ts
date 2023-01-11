import { compare, hash } from "bcrypt"
import { find, findOne } from "../../database/db"


export function Controller() {
    async function findAndValidad(username: string, password: string) {
        const data = await findOne('Users', `username = '${username}'`)
        const isEqual = await compare(password, `asdsad${data.password}`);
        if(isEqual){
            return {fullname:data.fullname}
        }
        return isEqual
    }

    return {
        findAndValidad
    }
}