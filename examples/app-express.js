var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('This is a home page')
});

app.get('/contact', (req, res) => {
    res.send('This is a contact page')
});

app.get('/profile/:id', (req, res) => {
    res.send('This is a profile with id: ' + req.params.id);
});

app.listen(3000);