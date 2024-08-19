import {Router, Request, Response} from 'express';
import { registerController, loginController } from '../controller/auth.controller';

const router = Router()

router.get('/', );
router.post('/login', loginController);
router.post('/register',registerController);

 
export {router}