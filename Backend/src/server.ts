import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import  router from "./routes/api/items";
const items = router


const app = express();

app.use(bodyParser.json());


const db = require('./config/keys').mongoURI;

mongoose.connect(db)
.then(()=>console.log("MongoDb connected!..."))
.catch((err:any)=>console.log(err));

app.use('api/items',items);

app.listen(3000,(()=>{
    console.log("server started at port 3000");
}))
