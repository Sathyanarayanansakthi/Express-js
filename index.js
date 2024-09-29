import express from "express";  // const express =require ("express")
const app = express ()// creating server and it will do all the thing


app.get("/", (req, res) => { 
    //req (request) from user side 
    //res (respond) giving resopnt to client from server
    res.send("nice"); 
});

// basics routed 
app.get("/about",(raq,res) =>{
    res.send("good night")
})

// Single call back function

app.get ("/scb",(req,res) =>{
    res.send("This is Single callBackfunction")
})

//HTTPS Methods in express js
//GET retrives data from server
// POST create /Insert the data from server
// PUT Compeletely update a resource
// PATCH Partially Update a resource
// DELETE delete data a resource
//ALL any HTTP Request Method

//advance routing  string pattern path
app.get ('/ab?cd',(req,res) =>{
    res.send("If the user hits (acd) or (abcd) then this will run")
})

//Reger  - short for regular expression to define routes
app.get (/x/,(req,res) =>{
    res.send("if the path includes the lteer (x) it will work")
})

//nested route
app.get('/product/phones',(req,res)=>{
    res.send("This part is will run if you provide /product/phones")
})
app.get('/product/phones/iphones',(req,res)=>{
    res.send("This part is will run if you provide /product/phones/iphone")
})


//Multiple call backfunction
app.get('/dobule-cb',(req,res,next)=>{
    res.send("First call back") ;next()
},   
//next object refers to next middleware function in req-res cycle
//used to pass control from onr middle function to the nect
(req,res) =>{
    res.send("Second call back")
})


//array of callback function
const cb1 =(eeq,res,next) =>{
    next();res.send("this is first callback function")
}

const cb2=(req,res,next) =>{
    next()
}
const cb3= (req,res,next) =>{
    next(); res.send("This is call back function 3")
}

app.get('/array-cb' ,[cb1,cb2,cb3])


//get ,post, put ,delete
app.get('/students',(req,res) => { //retrive data form server
    res.send("all students")
})

app.post('/students',(req,res)=>{ //create a data or inser a data
    res.send('add new stundets')
})
app.put('/students' ,(req,res)=>{ //update the data
    res.send("update students")
})

app.delete('/students',(req,res)=>{
    res.send("Data deleted")
})

//Refactor
//app.route() simple ways to use
//app.route () is a chainable route handlers fpr the path
app.route('/students')
.get((req,res) => res.send("all studenst"))
.post((req,res) => res.send("add new students"))
.put((req,res) => res.send("update studenst"))
.delete((req,res) => res.send("delete studenst"))





//middleware 






app.listen (3500,()=> {console.log("hi ")})