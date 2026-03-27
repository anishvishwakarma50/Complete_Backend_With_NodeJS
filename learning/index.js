const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello the serve is listening properly');
});

app.get('/about', (req, res) => {
    res.send('This is an About page');
})

// Make app listening 
app.listen(3000);