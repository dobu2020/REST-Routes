const { urlencoded } = require('express');
const express=require('express');
const app=express()

app.use(express.urlencoded({extended : true})) //for parsing request body

app.get('/',(req,res)=>{
    res.send('Hey It Worked')
})

//POST Route
//Extract Data from the request body and do something with it.
//GET ROUTE
//req:is the object made from incoming http request
//To access the req.body we should use request body parsing middleware like express.json or express.urlencoded
app.post('/',(req,res)=>{
   const {meat ,qty}=req.body
    res.send(`Your order of ${qty} ${meat} tacos are ready,`)
})
app.listen(8000,()=>{
    console.log('Listening on port 8000')
})