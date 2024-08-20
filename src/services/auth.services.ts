import { auth } from "../interfaces/auth.interface";
import { user } from "../interfaces/user.interface";
import userModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async({email, password, name}:user)=>{
    const checkIs = await userModel.findOne({email});
    if(checkIs) return "ALREADY USER";
    const passhash = await encrypt(password);
    const registerNewUser = await userModel.create(
        {
            email,
            password:passhash, 
            name}
        );
    return registerNewUser;
}; 

const loginUser = async({email, password}:auth)=>{
    const checkIs = await userModel.findOne({email});
    if(!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password,passwordHash);

    if(!isCorrect) return "PASSWORD_INCORRECT";

    const token = generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs
    };

    return data;
};

export {registerNewUser, loginUser} ;