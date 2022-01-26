const mongoose = require("mongoose");
const server = require('./api/server.js');
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const userRouter = require('./routes/userRouter');

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB connected"))

server.use("/api/v1/users", userRouter)

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});