const express=require('express')
const route=require('./router/Routing');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors({
    origin:"*"
}))
app.use('/',route);
app.listen(7000,()=>{
    console.log("server rinning on port: 7000");
})