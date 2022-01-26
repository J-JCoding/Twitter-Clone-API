const { findByIdAndUpdate } = require('../models/userModel');
const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                user
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

exports.getUser = async (req, res) => {
    try{
        const id = req.params.id;
        const user = await User.findById(id);

        res.status(200).json({
            status: "success",
            data: {
                user
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id, req.body,  {
            new: true,
            runValidators: true,
          });

        res.status(200).json({
            status: "success",
            data: {
                user
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.deleteUser = async (req, res) => {
    try{
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);

        res.status(200).json({
            status: 'success',
            data: null,
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}