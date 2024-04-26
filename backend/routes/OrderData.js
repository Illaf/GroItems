const express= require("express");
const router=  express.Router();
const mongoose=require("mongoose");
const Order= require("../models/Orders");

router.post('/orderData',async(req,res)=>{
    let data= req.body.orderData;
    await data.splice(0,0,{orderData:req.body.orderDate});

    let eId= await Order.findOne({'userEmail':req.body.email});
    console.log(eId);
    if(eId===null){
        try{
            await Order.create({
                userEmail:req.body.email,
                orderData:[data]
            }).then(()=>{
                res.json({success:true})
            })
        }catch(error){
            console.log(error.message)
            res.status(400).send(error.message)
        }
    }
    else{
        try{
            await Order.findOneAndUpdate({email:req.body.email},
               {$push:{orderDate:data}
            }) .then(()=>{
                res.json({success:true})
            })
                
        }catch(error){
            console.log("Server error", error.message)
        }
    }
})
module.exports=router;
