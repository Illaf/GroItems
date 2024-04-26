const express= require("express");
const router=  express.Router();
const mongoose=require("mongoose");
//const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');
let fetchedData; let requestedData;
async function fetchData() {
  const url = "mongodb+srv://ilafshafeeq:mernProject@cluster0.l7avaxr.mongodb.net/groceryMern?retryWrites=true&w=majority";
  const dbName = 'groceryMern';
  
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true});
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection('grocery');
    const groCategory = db.collection('categories');

    const data = await collection.find({}).toArray()
      fetchedData=data;
       //console.log(fetchedData);
    const groceryCategory= await groCategory.find({}).toArray();  
    //console.log(groceryData);
    //console.log(fetchedData);
     requestedData={
      collection1: fetchedData,
      collection2:groceryCategory
    }

 
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

fetchData();








router.post("/groceryData",async (req,res)=>{
  try{
    res.send(requestedData);


  }catch(err){
    console.log(err)
  }


})

module.exports=router;