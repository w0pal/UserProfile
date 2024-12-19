const e = require('express');
const userModel = require('../models/user-model');
const {error} = require('console');

const getAllUsers = async (req,res) => {
    try {
        const user = await userModel.getAllUsers()
        if(!user) res.json({message:'user not found'})
            res.json(user)
    }  catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error get all users'})
        res.json(user)
    }
}

const getUserById = async (req,res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (!user) res.json({message: 'User not found'});
        res.json(user);
    }
    catch {
        console.log(error);
        res.json({message:'Error'});        
    }
};

const addUser = async (req,res) => {
    try {
        const newUserId = await userModel.adduser(req.body)
        res.status(200).json({id:newUserId,...req.body})
    }
    
    catch (error) {
        res.status(500).json({message:'Error insert data',error})
    }
}

const updateUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const user = req.body
        const updated = await userModel.updateUserById(id, user)
        
        if (updated) {
            res.status(200).json({message: 'User updated successfully'})
        } else {
            res.status(400).json({message: 'User not found'})
        }
    }

    catch (error) {
        res
            .status(500)
            .json({message: 'Error updating user', error: error.message})
            
    }
}

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await userModel.deleteUserById(id);

    if (deleted) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting user", error: err.message });
  }
};


module.exports = {getAllUsers,getUserById, addUser, updateUserById, deleteUserById}
