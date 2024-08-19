import { Request, response, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { insertInstrument, getInstruments, getInstrument, updateInstrument,deleteInstrument } from "../services/item.services";

const getItems = async (req:Request, res:Response)=>{
    try {
        const response = await getInstruments();
        const data = response ? response: 'NOT FOUND';
        res.send(data);
    } catch (e) {
         handleHttp(res,'ERROR_GET_ITEMS');
    }
};

const getItem = async({params}:Request, res:Response) =>{
    try {
        const {id} = params;
       const response = await getInstrument(id);
       const data = response ? response : 'NOT FOUND';
       res.send(data);
    } catch (e) {
       handleHttp(res,'ERROR_GET_ITEM');
    }
};

const postItem = async ({body}:Request, res:Response)=>{
    try {
        const responseItem = await insertInstrument(body);
        res.send(responseItem);
    } catch (e) {
       handleHttp(res,'ERROR_POST_ITEM',e);
     
    }
 
};

const updateItem= async ({params,body}:Request, res:Response)=>{
    try {
        const {id} = params;
        const responseItem = await updateInstrument(id,body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res,'ERROR_UPDATE_ITEM',e);
    }
};
const deleteItem= async ({params}:Request, res:Response)=>{
    try {
        const {id} = params;
        const responseItem = await deleteInstrument(id);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res,'ERROR_DELETE_ITEM',e);
    }
};


export {getItem,getItems,updateItem,deleteItem,postItem};

 