import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request{
    user?: string | JwtPayload;
}
//Middleware que se encarga de verificar si tiene una conexión activa
const checkJwt = (req:RequestExt, res:Response, next: NextFunction)=>{
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop();
        const isUser = verifyToken(`${jwt}`);
        console.log(isUser);
        if(!isUser){
            res.status(401);
            res.send("NO_TIENES_UN_JWT_VALIDO");
        }else{
            req.user = isUser; 
            next();
        }
          
    } catch (e) {
        console.log({e});
        res.status(400);
        res.send("SESSION_NO_VALIDA");
    }
};

export {checkJwt};