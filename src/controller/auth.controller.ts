import { Request, response, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.services";

const registerController =  async({body}: Request, res:Response)=>{
    const responseUser = await registerNewUser(body);
    res.send(responseUser);
}

const loginController = async({body}: Request, res:Response)=>{
    const {email,password} = body; 
   const responseUser = await loginUser ({email,password});

   if(responseUser === "PASSWORD_INCORRECT"){
        res.status(403);     
        res.send(responseUser);
    }else{
        res.send(responseUser);
   }
};

export {loginController, registerController};