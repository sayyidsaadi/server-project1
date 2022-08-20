const express = require('express');
const dotenv = require('dotenv');
const pageRoute = require('./routes/pageRoutes');


// Init Express
const app = express();

// Environment variable
dotenv.config();
const PORT = process.env.PORT;

// Folder Static
app.use(express.static('public'));

// data manage
app.use(express.json());
app.use(express.urlencoded({ extended:false }));


// Server Listen
app.listen(PORT, ()=>{
    console.log(`
      Server Running on Port ${PORT}
    `);
})

// Router Page Init
app.use(pageRoute);