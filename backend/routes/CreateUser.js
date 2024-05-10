const express= require("express");
const router=  express.Router();
const User=require("../models/User");
const {body,validationResult} = require("express-validator");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const jwtSecretKey= process.env.JWT_SECRET


router.post("/createUser",[
body("email","Invalid email").isEmail(),
body("password","Invalid password").isLength({min:5})],
async(req,res)=>{

   const errors=validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
   }
  const salt= await bcrypt.genSalt(10);
  let secPassword= await bcrypt.hash(req.body.password,salt)

 try{

   

    User.create({
        name:req.body.name,
        password:secPassword,
        email:req.body.email,
        location:req.body.location
    })
    res.json({success:true})
 }catch(err){
    console.log(err);
    res.json({success:false})
 }
})
router.post("/loginUser", async (req,res)=>{
   let success=false;
   let email=req.body.email;
   try{
      let userData= await User.findOne({email});
      if(!userData){
         return res.status(400).json({error:"not a registered user"})
        
      }
      const pwdCompare= await bcrypt.compare(req.body.password,userData.password);
      if(!pwdCompare){
            return res.status(400).json({success,error:"Invalid credentials"})
      }
     
     const Data= {
      user:{
         id:userData.id
      }
     }
     
     const authToken=jwt.sign(Data,jwtSecretKey);
     return res.json({success:true,authToken:authToken})

      // return res.status(200).json({success,authToken})
   }catch(err){
      console.log(err)
      res.json({success:false,error:err})
   }
})

module.exports=router;