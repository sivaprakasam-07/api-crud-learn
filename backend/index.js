const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("Sivaprakasam T")
});
app.get('/',(req,res)=>{
    res.send("Welcome Sivaprakasam")
});