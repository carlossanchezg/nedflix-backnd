const api = require('./api');

const PORT = 3000;

// eslint-disable-next-line no-console
api.listen(PORT, () => console.log(`Server on PORT ${PORT} 🤪`.magenta.bold));
