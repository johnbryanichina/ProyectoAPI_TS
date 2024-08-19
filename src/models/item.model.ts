import {Schema,Types,model, Model} from "mongoose";
import { instrument } from "../interfaces/instruments.interface";

const ItemSchema = new Schema<instrument>(
    {
        nombre:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        type_ins:{
            type:String,
            enum:["wind" , "percussion" , "electric" ,"string"],
            required:true,
        },
        year:{
            type:Number,
            required:true,
        },
        price:{
            type:Number,
            required:true,  
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

const itemModel = model('instrument',ItemSchema);
export default itemModel;