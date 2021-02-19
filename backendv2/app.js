const express = require("express");
const config = require("./config/app");
const cors = require("cors");
const http = require('http')

const app = express();

// Body parser
app.use(express.json());
app.use(cors());

// Mount routes
app.use("/api/users", require("./routes/user-routes"));
app.use("/api/chats", require("./routes/chat-routes"));

// Static folder
app.use(express.static(__dirname + "/uploads"));

const server = http.createServer(app);
const SocketServer = require('./socket/index');
SocketServer(server)

server.listen(config.appPort, () => {
    console.log(`Server run on port ${config.appPort}`);
});
