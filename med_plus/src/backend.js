const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello World!');
});

app.post('/api', (req, res) => {
    // Assuming you're sending JSON data in the request body
    const { first_name, last_name } = req.body;
    const response = {  
        first_name: first_name,  
        last_name: last_name  
    };  
    console.log(response);  
    res.json(response);  
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

