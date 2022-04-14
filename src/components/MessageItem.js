import React from "react";
import "./MessageItem.css";

export default ({data, user}) => {
    return (
        <div 
            className="messageLine"
            style={{
                justifyContent: user.id === data.author ? "flex-end" : "flex-start"
            }}
        >
            <div
                className="messageItem"
                style={{
                    backgroundColor: user.id === data.author ? "#DCF8C6" : "#FFF",
                    borderRadius: user.id === data.author ? "10px 0 10px 10px" : "0 10px 10px 10px"
                }}
            >
                <div className={user.id === data.author ? "messageTail--right" : "messageTail--left"}></div>
                <div className="messageText">{data.body}</div>
                <div className="messageDate">19:00</div>
            </div>
        </div>
    );
}