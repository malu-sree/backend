const express=require('express')
const cors=require('cors');
const { request } = require('http');

const app=express();
app.use(cors())
//http:localhost:9000/home->api
app.get("/home",(req,res)=>{
    let array=["Apple","Orange","mango"]
    res.send(array)
})
app.get("/",(req,res)=>{
    res.send('home page')
})



app.listen(9000,()=>{
    console.log('server running http://localhost:9000')
})

//npm init -y
//npm i express nodemon cors