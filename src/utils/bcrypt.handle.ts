import {hash,compare} from "bcryptjs";
//encriptar

const encrypt = async (pass:string)=>{
    const passwordHash = await hash(pass, 8);
    return passwordHash;
};
 
//verificar si la contraseña plana está enviando pertenece a su parte encriptada en el backend

const verified = async (pass:string, passHash:string) =>{
    const isCorrect = await compare(pass, passHash);
    return isCorrect;
};

export {encrypt, verified};