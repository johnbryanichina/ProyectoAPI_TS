import { Router } from "express";

import {readdirSync} from "fs"

const PATH_ROUTER = `${__dirname}`
const router = Router();

readdirSync(PATH_ROUTER).filter((filename)=>{
    console.log(filename);
})

export {router};