import express from "express";  // const express =require ("express")
import student from './routes/students.js';
import teacher from './routes/teachers.js'
//extenstion is must

const app = express ()// creating server and it will do all the thing



//advance route (followt his )
// 1create routes folder and put your routes in a seperate file
// 2 cretaing instance of express.router()
//3 app.method change torouter.method
//4 import and export  router
//5 use the (app.use) builtin middleware and prvide your router


//usedto register middelware or mount router 
app.use("/student", student);
app.use("/teacher", teacher)



app.listen (3500,()=> {console.log("hi ")})