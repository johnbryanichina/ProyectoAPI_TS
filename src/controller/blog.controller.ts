import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"; 

const getItem =( req:Request, res:Response) =>{
    try {
    } catch (e) {
       handleHttp(res,'ERROR_GET_BLOG');
    }
} 

const getItems=(req:Request, res:Response)=>{
    try {
    } catch (e) {
         handleHttp(res,'ERROR_GET_BLOGS');
    }
}
const postItem=(req:Request, res:Response)=>{
    try {
    } catch (e) {
       handleHttp(res,'ERROR_POST_ITEM');
    }
}
const updateItem=(req:Request, res:Response)=>{
    try {
    } catch (e) {
        handleHttp(res,'ERROR_UPDATE_BLOG');
    }
}
const deleteItem=(req:Request, res:Response)=>{
    try {
    } catch (e) {
        handleHttp(res,'ERROR_DELETE_BLOG');
    }
}


export {getItem,getItems,updateItem,deleteItem,postItem};

function interItem(body: any) {
    throw new Error("Function not implemented.");
}
