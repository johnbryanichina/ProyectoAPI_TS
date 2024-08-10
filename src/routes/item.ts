import {Router, Request, Response} from 'express'

const router = Router()

router.get('/api', (_req:Request, res:Response)=>{
    res.send({data:"AQUI_VAN_LOS_MODELOS"});
});

export {router}