import React from 'react'

const Chat = () => {
  return (
    <>
      <nav>
        <div class="navbar--chat">
          <input type="text" class="navbar--chat--search" placeholder="Search" />
          <h3 class="text-white">UnityServe Connect</h3>
          <div class="navbar--chat--profile">
            <i class="fa-solid fa-bell navbar--chat--profile--bell" style="color: #ffffff;" ></i>
            <div class="navbar--chat--profile--icon">
              <img src="member2.png" alt="" class="navbar--chat--profile--icon--img" />
            </div>
          </div>
        </div>
      </nav>

      <section id="chats">
        <div class="chats chat-message-container">
          <div class="chats--info">
            <h3 class="">My chats</h3>
            <input type="text" class="chats-search" placeholder="New Group chat +" />
          </div>
          <div class="all--chats">
            <div class="all--chats-chat all--chats-chat--active">
              <h4 class="text-white">Name</h4>
            </div>
            <div class="all--chats-chat">
              <h4 class="">Name</h4>
            </div>
            <div class="all--chats-chat">
              <h4 class="">Name</h4>
            </div>
          </div>
        </div>
        <div class="chat--messages chat-message-container">
          <div class="chat-messages-info">
            <h3 class="">Name</h3>
            <i class="fa-solid fa-eye" style="color: #2b5cb1;"></i>
          </div>
          <div class="chat-messages-container">
            <div class="server left">Hello</div>
            <div class="client right">Hi I am good</div>
          </div>
          <div class="chat-message-input">
            <input type="text" placeholder="Enter a message" class="message--text--send" />
            <button type="submit" class="message--text--send--icon">Send</button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Chat