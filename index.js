const colors = require('colors');
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    // res.send('<h1>Hi from nedflix 🥳</h1>');
    res.json({ message: 'Hi from nedflix 🥳' });
});

app.listen(PORT, () => console.log(`Server on PORT ${PORT} 🤪`.magenta.bold));