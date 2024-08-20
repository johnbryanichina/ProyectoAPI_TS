import {Schema, Types,model, Model} from "mongoose"
import { user } from "../interfaces/user.interface"
 
const UserSchema = new Schema<user>
(
    {
        name:{
            type:String,
            required:true,
        },
        description:{
            type:String, 
            default:"hola soy descripcion por defecto",
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        }
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
const userModel = model('users',UserSchema);
export default userModel;