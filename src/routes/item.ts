import {Router, Request, Response} from 'express'
import { getItems,postItem,updateItem,deleteItem,getItem } from '../controller/item.controller';
import { logMiddleware } from '../middleware/log';

const router = Router()

router.get('/', getItems);

router.get('/:id', logMiddleware, getItem);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);


export {router}