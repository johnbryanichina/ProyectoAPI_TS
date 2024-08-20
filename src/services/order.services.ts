import { instrument } from "../interfaces/instruments.interface";
import itemModel from "../models/item.model";



const getOrders = async ()=>{
    const responseItem = await itemModel.find({})
    return responseItem;
} 
export {getOrders};