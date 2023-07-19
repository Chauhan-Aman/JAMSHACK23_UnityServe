const express = require('express')
const router = express.Router()
const Chat = require('../models/chatModel')
const User = require('../models/User')
const fetchuser = require('../middleware/fetchuser')


// accessChat
router.post('/', fetchuser, async (req, res) => {
    const { userId } = req.body
    if (!userId) {
        console.log("UserId param not sent with request")
        return res.sendStatus(400)
    }

    var isChat = await Chat.find({
        isGroupChat: false,
        $and: [
            { users: { $elemMatch: { $eq: req.user._id } } },
            { users: { $elemMatch: { $eq: userId } } }
        ],
    })
        .populate("users", "-password")
        .populate("latesMessage")

    isChat = await User.populate(isChat, {
        path: "latestMessage.sender",
        select: "name pic email",
    })

    if (isChat.length > 0) {
        res.send(isChat[0])
    } else {
        var chatData = {
            chatName: "sender",
            isGroupChat: false,
            users: [req.user._id, userId],
        }

        try {
            const createdChat = await Chat.create(chatData)
            const FullChat = await Chat.findOne({ _id: createdChat._id })
                .populate("users", "-password")
            res.status(200).json(FullChat)
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Internal Server Error")
        }
    }
})

// fetchchats
router.get('/', fetchuser, (req, res) => {
    try {
        Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")
            .populate("latestMessage")
            .sort({ updatedAt: -1 })
            .then(async (results) => {
                results = await User.populate(results, {
                    path: "latestMessage.sender",
                    select: "name pic email",
                })
                res.status(200).send(results)
            })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router