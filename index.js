
const express=require("express");
const app=express();
//load config from env file
require("dotenv").config();
const PORT=process.env.PORT||4000;
//middle ware to prase json request body

app.use(express.json());

//imprt routes for TODO API
const todoRoutes=require('./routes/todos')

//mount the todo API routes

app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log("server started at ${PORT}");
})
//connect to th edatabase
const dbConnect=require("./config/databse")
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send('<h1> this is homepage</h1>');
})