let userService = require('./userService')

let getDAtaControllerfn = async (req, res) => {
    
    let employee = await userService.getDataFromDBServices();
    
    res.send({"status" : true, "data" : employee})
}

let createUserControllerfn = async(req, res) =>{
    
    let status = await userService.createUserDBService(req.body);
    
    if(status){
        res.send({"status": true, "message" : "User created successfully"})
    } else {
        res.send({"status": false, "message" : "Error creating user"})
    }
}

let updateUserController = async(req, res) =>{
    
    let result = await userService.updateUserDBService(req.params.id, req.body);
    
    if(result){
        res.send({"status": true, "message" : "User update"})
    } else {
        res.send({"status": false, "message" : "Error update fail"})
    }
}

let deleteUserController = async(req, res) =>{
    
    let result = await userService.removeUserDBService(req.params.id);
    
    if(result){
        res.send({"status": true, "message" : "User remove"})
    } else {
        res.send({"status": false, "message" : "Error remove user fail"})
    }
}

module.exports = { getDAtaControllerfn, createUserControllerfn, updateUserController, deleteUserController }