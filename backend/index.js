const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const MongoClient = require('mongodb').MongoClient;
const PORT = 5000;
const DB =
  "mongodb+srv://ilafshafeeq:mernProject@cluster0.l7avaxr.mongodb.net/grocer Mern?retryWrites=true&w=majority";

(async () => {
  try {
    await mongoose.connect(DB, { useNewUrlParser: true });
    console.log("database connected successfully");
   
   } catch (err) {
    console.log("error" + err);
  }
})();
// async function fetchData() {
//   const url = "mongodb+srv://ilafshafeeq:mernProject@cluster0.l7avaxr.mongodb.net/groceryMern?retryWrites=true&w=majority";
//   const dbName = 'groceryMern';

//   try {
//     const client = await MongoClient.connect(url, { useNewUrlParser: true});
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);
//     const collection = db.collection('grocery');

//     const data = await collection.find({}).toArray();
//     console.log(data);

//     client.close();
//   } catch (err) {
//     console.error(`Error: ${err}`);
//   }
// }
// fetchData();
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json());
app.use("/api",require("./routes/CreateUser"));
app.use("/api",require("./routes/DisplayData"));
app.use("/api",require("./routes/OrderData"));
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
