import { compare, hash } from "bcrypt"
import { find, findOne } from "../../database/db"


export function Controller() {
    async function findAndValidad(username: string, password: string) {
        try {
            const data = await findOne('Users', `username = '${username}'`)
            if (!data) return false
            const isEqual = await compare(password, `${data.password}`);
            if (!isEqual) return false
                return { fullname: data.fullname }
            
        }
        catch (e) {
            throw new Error('[server]: internal server error')
        }
    }

    return {
        findAndValidad
    }
}