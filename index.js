const server = require('./api/server.js');
const dotenv = require("dotenv")
dotenv.config({path: "./config.env"})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});