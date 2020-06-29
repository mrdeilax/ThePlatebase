const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Plate = require("./models/plate");
const plate = require("./models/plate");

const app = express();

mongoose.connect(
    "mongodb+srv://admin:94hvdiYiwGgpbH0N@cluster0-l8sxy.mongodb.net/PlateDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("connection failed");
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//fixes CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS, PUT"
    );
    next();
  });

app.post("/api/plates", (req, res, next) => {
  const plate = new Plate({
    number: req.body.number,
    fname: req.body.fname,
    lname: req.body.lname,
  });
  plate.save().then(result => {
    res.status(201).json({
        message: "Plate added succesfully",
        plateId: result._id
      }); 
  });
  
});


app.get("/api/plates", (req, res, next) => {
  Plate.find().sort({number: 1})
    .then(documents => {
        console.log(documents);
        res.status(200).json({
            message: "Platecode . fetched succesfully!",
            plates: documents
          });
    });
});

app.delete("/api/plates/:_id", (req, res, next)=>{
    Plate.deleteOne({_id: req.params._id}).then(result=>{
        console.log(result);
        res.status(200).json({message: "Working!"})
    });  
});

app.put("/api/plates/:_id", (req, res, next) => {
  const plate = new Plate({
    _id: req.body._id,
    number: req.body.number,
    fname: req.body.fname,
    lname: req.body.lname, 
  });
  Plate.updateOne({_id: req.params._id}, plate)
    .then((result) => {
      console.log(result);
      res.status(200).json({message: "Update sucessful!"});
    })
});

app.get("/api/plates/:_id", (req, res, next) => {
  plate.findById(req.params._id).then((plate) => {
    if(plate) {
      res.status(200).json(plate);
    }else{
      res.status(404).json({message: 'Plate not found'})
    }
  });
});

module.exports = app;
