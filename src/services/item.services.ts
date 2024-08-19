import { instrument } from "../interfaces/instruments.interface";
import itemModel from "../models/item.model";



const getInstruments = async ()=>{
    const responseItem = await itemModel.find({})
    return responseItem;
}
const getInstrument = async (id:string)=>{
    const responseItem = await itemModel.findOne({_id:id});
    return responseItem;
}

const insertInstrument = async (item:instrument) =>{
    const responseInsert = await itemModel.create(item);
    return responseInsert;
};
const updateInstrument = async (id:string, data:instrument)=>{
    const response = await itemModel.findOneAndUpdate({_id:id},data,{
        new:true,
    });
    return response;
}

const deleteInstrument = async (id:string)=>{
    const response = await itemModel.findOneAndDelete({_id:id});
    return response;
}
export {insertInstrument,getInstruments, getInstrument,updateInstrument,deleteInstrument};