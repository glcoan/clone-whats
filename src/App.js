import React, { useState, useEffect } from "react";
import "./App.css";

import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

export default () => {

    const [chatList, setChatList] = useState([
        {chatId: 1, title: "Fulano", image: "https://www.w3schools.com/howto/img_avatar2.png"},
        {chatId: 2, title: "Sicrano", image: "https://www.w3schools.com/w3images/avatar2.png"},
        {chatId: 3, title: "Beltrano", image: "https://www.w3schools.com/w3images/avatar6.png"},
        {chatId: 4, title: "Deltano", image: "https://www.w3schools.com/w3images/avatar5.png"},
    ]);
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState({
        id: 1234,
        avatar: "https://avatars.githubusercontent.com/u/47989246?s=400&u=26f8631b582f2979b34c756b7af744d04eb0c06c&v=4",
        name: "Gabriel Coan"
    });
    const [showNewChat, setshowNewChat] = useState(false);

    const handleNewChat = () => {
        setshowNewChat(true);
    }

    return (
        <>
            <div className="app-window">
                <div className="sidebar">
                    <NewChat
                        chatList={chatList}
                        user={user}
                        show={showNewChat}
                        setShow={setshowNewChat}
                    />
                    <header>
                        <img className="header--avatar" src={user.avatar} alt="" />
                            <div className="header--buttons">
                                <div className="header--btn">
                                    <DonutLargeIcon style={({color: "#919191"})} />
                                </div>
                                <div className="header--btn">
                                    <ChatIcon onClick={handleNewChat} style={({color: "#919191"})} />
                                </div>
                                <div className="header--btn">
                                    <MoreVertIcon style={({color: "#919191"})} />
                                </div>
                            </div>
                    </header>

                    <div className="search">
                        <div className="search--input">
                            <SearchIcon fontSize="small" style={({color: "#919191"})} />
                            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
                        </div>
                    </div>

                    <div className="chatlist">
                        {chatList.map((item, key)=>(
                            <ChatListItem
                                key={key}
                                data={item}
                                active={activeChat.chatId === chatList[key].chatId}
                                onClick={()=>setActiveChat(chatList[key])}
                            />
                        ))}
                    </div>

                </div>
                <div className="contentarea">
                    {activeChat.chatId !== undefined &&
                        <ChatWindow
                            user={user}
                            data={activeChat}
                        />
                    }
                    {activeChat.chatId === undefined &&
                        <ChatIntro />
                    }
                </div>
            </div>
        </>
    );
}
