const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/ScrumUser');
const router = express.Router();
const SECRET_KEY = "your_secret_key";

router.post('/register', async (req, res) => {
    try {
        const { fullName, username, password, email } = req.body;
<<<<<<< Updated upstream
        // Create a new user instance
=======
        // Hash the password before saving
        // const hashedPassword = await bcrypt.hash(password, 8);

>>>>>>> Stashed changes
        const newUser = new User({
            fullName,
            username,
            password,
            email
        });
        // Save the new user to the database
        await newUser.save();
        // Send a success response
        res.status(201).send('User registered successfully');
    } catch (error) {
        // Send an error response if registration fails
        res.status(500).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        // Find the user in the database
        const user = await User.findOne({ username });
        // Check if the user exists
        if (!user) {
            return res.status(404).send('no user');
        }
        // Compare the password with the hashed password stored in the database
        if (password !== user.password) {
            // If the passwords do not match, send an error response
            return res.status(400).send('password no');
        }
        // Generate a JWT token for authentication
        const token = jwt.sign(
            { id: user._id },
            SECRET_KEY,
            { expiresIn: '8h' }
        );
        // Send a success response with the JWT token
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        // Send an error response if login fails
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
