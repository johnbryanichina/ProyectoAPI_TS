import {Router, Request, Response} from 'express'
import { getItems,postItem,updateItem,deleteItem,getItem } from '../controller/item.controller';

const router = Router()

router.get('/', getItems);

router.get('/:id',getItem);
router.post('/',postItem);
router.put('/:id',updateItem);
router.delete('/:id',deleteItem);


export {router}