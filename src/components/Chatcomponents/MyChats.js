import React, { useState, useEffect } from 'react'
import { ChatState } from '../../context/products/ChatProvider'
import axios from "axios"
import { getSender } from "../../config/ChatLogics"

const MyChats = ({ fetchAgain }) => {

    // const host = "http://localhost:7000"

    const [loggedUser, setLoggedUser] = useState()

    const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState()

    const fetchChats = async () => {

        // Using fetch

        // try {
        //     const data = await fetch(`${host}/api/chat`, {
        //         method: "GET",
        //         headers: {
        //             Authorization: `Bearer ${user.token}`
        //         }
        //     })
        //     const json = await data.json()
        //     setChats(json)
        // } catch (error) {
        //     console.error(error.message)
        //     // Error occured alert
        // }

        // Using Axios 

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const { data } = await axios.get("/api/chat", config)
            setChats(data);
        } catch (error) {
            console.error(error.message)
            // Error occured alert
        }
    }

    useEffect(() => {
        setLoggedUser(JSON.parse(localStorage.getItem("userInfo")))
        fetchChats()
        // eslint-disable-next-line
    }, [fetchAgain])


    return (
        <>
            <div
                style={{
                    display: selectedChat ? "none" : "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "3px",
                    background: "white",
                    width: "100%",
                    borderRadius: "lg",
                    borderWidth: "1px",
                }}>
                <div
                    style={{
                        paddingBottom: "3px",
                        paddingLeft: "3px",
                        fontSize: "28px",
                        fontFamily: "Work sans",
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    My Chats
                    <div>
                        <button
                            style={{
                                display: "flex",
                                fontSize: "17px",
                                marginRight: "5px",
                            }}>
                            New Group Chat
                        </button>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3px",
                        background: "#F8F8F8",
                        width: "100%",
                        height: "100%",
                        borderRadius: "lg",
                        overflowY: "hidden",
                    }}>

                    {chats ? (
                        <div style={{ overflowY: "scroll" }}>
                            {chats.map((chat) => (
                                <div
                                    onClick={() => setSelectedChat(chat)}
                                    style={{
                                        cursor: "pointer",
                                        background: selectedChat === chat ? "#38B2AC" : "#E8E8E8",
                                        color: selectedChat === chat ? "white" : "black",
                                        padding: "3px",
                                        paddingTop: "2px",
                                        borderRadius: "lg",
                                    }}
                                    key={chat._id}
                                >
                                    <div>
                                        {!chat.isGroupChat
                                            ? getSender(loggedUser, chat.users)
                                            : chat.chatName}
                                    </div>
                                    {chat.latestMessage && (
                                        <div style={{ fontSize: "xs" }}>
                                            <b>{chat.latestMessage.sender.name} : </b>
                                            {chat.latestMessage.content.length > 50
                                                ? chat.latestMessage.content.substring(0, 51) + "..."
                                                : chat.latestMessage.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default MyChats