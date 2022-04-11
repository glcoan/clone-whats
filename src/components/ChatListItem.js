import React from 'react';
import './ChatListItem.css';

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Gabriel Coan</div>
                    <div className="chatListItem--date">12:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Opa, tudo bem? Como posso ajudar? Aqui estão algumas sugestões de interação:</p>
                    </div>
                </div>
            </div>
        </div>
    );
}