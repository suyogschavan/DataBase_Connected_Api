const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8000;
require("./db/conn");
const Client = require("./models/client");



app.use(express.json());
 

// register Client to Mondo DB
app.post("/clients", async(req, res) => {
    try{
const user = new Client(req.body);
const createUser = await user.save();
res.status(201).send(createUser);
    }catch(e){
res.status(400).send(e);
    }

})


// getting all clients
app.get("/clients", async (req, res) => {
    
        try{
            const clientsData = await Client.find();
            res.send(clientsData);

        }catch(e){
            res.send(e);

        }

})

// get client details by using id

app.get("/clients/:id", async (req, res) => {
    try{
        const _id = req.params.id;
         const clientData= await Client.findById(_id);
         console.log(clientData);

if(!clientData){
        return res.status(404).send();
    }
    else{
        res.send(clientData);
    }

    }catch(e){
        res.send(e);
    }
})

// Update the students by ID

app.patch("/clients/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const updateClient = await Client.findByIdAndUpdate(_id, req.body );
        res.send(updateClient);
    }catch(e){
        /* const _id = params.id;
        const updateClient = await Client.findByIdAndUpdate(_id, req.body ); */
        res.status(404).send(e);
    }
})


// Delete the client by id
app.delete("/clients/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const deleteClient = await Client.findByIdAndDelete(id);
        if(!id){
            return res.status(404).send("id not found");
        }
        res.send(deleteClient);
    }catch(e){
        res.status(500).send(e);

    }
})


app.listen(port, () => { 
    console.log(`connection is setup at ${port}`);
})