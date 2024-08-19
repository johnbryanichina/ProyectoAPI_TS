import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.services";

const registerController =  async({body}: Request, res:Response)=>{
    const responseUser = await registerNewUser();
}

const loginController = async(req: Request, res:Response)=>{};

export {loginController, registerController};