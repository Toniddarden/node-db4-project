const express = require('express');
const recipeRouter = require('./recpies/recpie-router')
const server = express();

server.use(express.json());
// server.use('/api/recipes')

server.get('/', (req, res) => {
    res.send('hello from server')
})


module.exports = server;