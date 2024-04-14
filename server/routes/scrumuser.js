const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/ScrumUser');
const router = express.Router();
const SECRET_KEY = "your_secret_key";

router.post('/register', async (req, res) => {
    try {
        const { fullName, username, password, email } = req.body;

        const newUser = new User({
            fullName,
            username,
            password,
            email
        });

        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).send('no user');
        }
        if (password !== user.password) {
            return res.status(400).send('password no');
        }
        const token = jwt.sign(
            { id: user._id },
            SECRET_KEY,
            { expiresIn: '8h' }
        );
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
