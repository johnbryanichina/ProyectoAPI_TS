import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import db from "./config/mongo"

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());

app.use(cors());
app.use(router);

db().then(()=>  console.log("Connection successfully"))
.catch((error)=>{
    console.log("Ha ocurrido un error: ",error)
});

app.listen(PORT, ()=>console.log(`Server listening on PORT ${PORT}`))