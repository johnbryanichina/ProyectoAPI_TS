import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";

const getItem =( req:Request, res:Response) =>{
    try {
    } catch (e) {
       handleHttp(res,'ERROR_GET_ITEM');
    }
} 

const getItems=(req:Request, res:Response)=>{
    try {
    } catch (e) {
         handleHttp(res,'ERROR_GET_ITEMS');
    }
}
const postItem= async ({body}:Request, res:Response)=>{
    try {
        const responseItem = await interItem(body);
        res.send(responseItem);
    } catch (e) {
       handleHttp(res,'ERROR_POST_ITEM',e);
    }
}
const updateItem=(req:Request, res:Response)=>{
    try {
    } catch (e) {
        handleHttp(res,'ERROR_UPDATE_ITEM');
    }
}
const deleteItem=(req:Request, res:Response)=>{
    try {
    } catch (e) {
        handleHttp(res,'ERROR_DELETE_ITEM');
    }
}


export {getItem,getItems,updateItem,deleteItem,postItem};

function interItem(body: any) {
    throw new Error("Function not implemented.");
}
