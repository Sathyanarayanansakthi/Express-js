import express from "express";
const app=express()

//router param
app.get('/skasc/students/marks/:rollno',(req,res)=>{  //id is a route parameter and acts placeholder
    res.send(req.params.rollno) //req.params.id measn geting id from user
}
)

app.listen(3500,()=> {
    console.log("hello ")})