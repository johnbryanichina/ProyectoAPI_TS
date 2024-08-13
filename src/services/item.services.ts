import itemModel from "../models/item.model";
import { instrument } from "../interfaces/instruments.interface";

const interModel = async (item:instrument) =>{
    const responseInsert = await itemModel.create(item);
    return responseInsert;
};

export {interModel};