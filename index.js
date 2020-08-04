require('dotenv').config();
require('./database');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const api = require('./api');

const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-console
api.listen(PORT, () => console.log(`Server on PORT ${PORT} 🤪`.magenta.bold));
