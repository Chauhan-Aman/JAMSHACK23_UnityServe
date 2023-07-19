const express = require("express")
const router = express.Router()
const User = require('../models/User')
const Chat = require('../models/chatModel')
const Message = require('../models/messageModel')
const fetchuser = require('../middleware/fetchuser')

// all messages
router.get('/:chatId', fetchuser, async (req, res) => {
    try {
        const messages = await Message.find({ chat: req.params.chatId })
            .populate("sender", "name email")
            .populate("chat")
        res.json(messages)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// send message
router.post("/", fetchuser, async (req, res) => {
    const { content, chatId } = req.body

    if (!content || !chatId) {
        console.log("Invalid data passed into request")
        return res.sendStatus(400)
    }

    var newMessage = {
        sender: req.user._id,
        content: content,
        chat: chatId,
    };

    try {
        var message = await Message.create(newMessage)

        message = await message.populate("sender", "name").execPopulate()
        message = await message.populate("chat").execPopulate()
        message = await User.populate(message, {
            path: "chat.users",
            select: "name pic email",
        })

        await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message })
        res.json(message)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router