const colors = require('colors');
const api = require('./api');

const PORT = 3000;


api.listen(PORT, () => console.log(`Server on PORT ${PORT} 🤪`.magenta.bold));