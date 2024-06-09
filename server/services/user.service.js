
import { redis } from "../utils/redis.js";
// get user by Id
export const getUserById=async(id,res)=>{
const userJson= await redis.get(id)

if(userJson){
    const user=JSON.parse(userJson);
    res.status(201).json({
        success:true,
        user
    })
}

}