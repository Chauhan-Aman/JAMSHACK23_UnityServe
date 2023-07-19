const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

// import connectToMongo from "./db"
// import express from "express";
// import cors from "cors";

connectToMongo();   

const app = express();
const port = 7000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

//Routes
app.use('/api/auth', require("./routes/auth"));
app.use('/api/product', require("./routes/products"));
app.use('/api/chat',require("./routes/chat"))
app.use('/api/message',require("./routes/message"))

const server = app.listen(port, () => {
    console.log(`UnityServe backend listening at http://localhost:${port}`);
})

// Socket.io
const io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket) => {
    console.log("Connected to socket.io")
    socket.on("setup", (userData) => {
        socket.join(userData._id)
        socket.emit("connected")
    })

    socket.on("join chat", (room) => {
        socket.join(room)
        console.log("User joinedd Room: " + room)
    })

    socket.on("typing", (room) => socket.in(room).emit("typing"));
    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"))

    socket.on("new message", (newMessageReceived) => {
        var chat = newMessageReceived.chat

        if (!chat.users) return console.log("chat.users not defined")

        chat.users.forEach((user) => {
            if (user._id === newMessageReceived.sender._id) return;
            socket.in(user._id).emit("message recieved", newMessageReceived)
        })

    })

    socket.off("setup", (userData) => {
        console.log("USER DISCONNECTED")
        socket.leave(userData._id)
    })
})
