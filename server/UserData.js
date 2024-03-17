var express = require("express");
const { MongoClient } = require("mongodb");
var cors = require("cors");
const bodyParser = require("body-parser");

var app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var url = "mongodb+srv://biswanath44:nayak80@cluster0.v7mo1bs.mongodb.net/userform?retryWrites=true&w=majority&appName=Cluster0";

var collection;
//Establish a Connection.
MongoClient.connect(url)
  .then((res) => {
    console.log("Connected to mongodb");
    // Access the Collections
    const database = res.db("userform");
    collection = database.collection("tblusers"); // Assign to the outer variable
  })
  .catch((error) => {
    console.error("Error Connecting to mongodb:", error);
  });

  // Check if the server is running
  app.get("/dchk",(req,res)=>{
    res.status(200).json({message:"everything is OKAY!"});
  })

  //Acess data
  app.get("/getusers",(req,res)=>{
      collection .find({}) .toArray()
        .then((users) =>{
          res.json(users);
        })
        .catch((error) => {
          console.error("Error Fetching User Data:", error);
          res.status(500).json({ Error: "Internal server error!" });
        });
    });
  
    //Single User insertOne Post
app.post("/setuser",(req,res)=>{
    const User = {
                  id: req.body.id,
                 Name: req.body.Name,
                 Email: req.body.Email,
                 Age: req.body.Age,
                 DOB: req.body.DOB
        }  

    collection .insertOne(User)
    .then((result)=>{
      res.status(201).json(result);
    })

    .catch((error)=>{
      console.error("Error Adding users", error);
      res.status(500).json({error: "Internal Server Error"});
    });
});

// route to handle editing a user
app.put("/edituser/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  collection.updateOne({ id: userId }, { $set: updatedUser })
      .then(() => {
          res.status(200).json({ message: "User updated successfully" });
      })
      .catch((error) => {
          console.error("Error updating user:", error);
          res.status(500).json({ error: "Internal Server Error" });
      });
});

// route to handle deleting a user
app.delete("/deleteuser/:id", (req, res) => {
  const userId = req.params.id;

  collection.deleteOne({ id: userId })
      .then(() => {
          res.status(200).json({ message: "User deleted successfully" });
      })
      .catch((error) => {
          console.error("Error deleting user:", error);
          res.status(500).json({ error: "Internal Server Error" });
      });
});


app.listen(8080, () => {
  console.log("server started");
});


