var express=require("express");
var imp=require('./module');
const app=express();
const port=1200;

app.get("/",(req,res)=>{

    //res.send("hello");
    res.write(imp.myDate());
    res.end();
});
app.listen(port,()=>
{
    console.log(`server is running on ${port}`);
});