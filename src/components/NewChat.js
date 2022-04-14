import React, { useState } from "react";
import "./NewChat.css";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default ({user, chatList, show, setShow}) => {
    const [list, setList] = useState([
        {id: 1, avatar: "https://www.w3schools.com/howto/img_avatar2.png", name: "Fulano"},
        {id: 2, avatar: "https://www.w3schools.com/w3images/avatar2.png", name: "Sicrano"},
        {id: 3, avatar: "https://www.w3schools.com/w3images/avatar6.png", name: "Beltrano"},
        {id: 4, avatar: "https://www.w3schools.com/w3images/avatar5.png", name: "Deltano"}
    ]);

    const handleClose = () => {
        setShow(false);
    }
    
    return (
        <div className="newChat" style={{left: show?0:-415}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color: "#FFF"}} />
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key)=>(
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}