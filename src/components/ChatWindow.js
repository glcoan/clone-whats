import React from 'react';
import './ChatWindow.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';


export default ({data}) => {
    return (
        <div className="chatWindow">
            <div className="chatWindow--header">

                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src={data.image} alt="" />
                    <div className="chatWindow--name">{data.title}</div>
                </div>

                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: "#919191"}} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: "#919191"}} />
                    </div>
                </div>

            </div>
            <div className="chatWindow--body">

            </div>
            <div className="chatWindow--footer">

                <div className="chatWindow--pre">
                    
                    <div className="chatWindow--btn">
                        <InsertEmoticonIcon style={{color: "#919191"}} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: "#919191"}} />
                    </div>

                </div>
                <div className="chatWindow--inputarea">
                    <input 
                        className="chatWindow--input"
                        type="text"
                        placeholder="Mensagem"
                    />
                </div>
                <div className="chatWindow--pos">
                    
                    <div className="chatWindow--btn">
                        <SendIcon style={{color: "#919191"}} />
                    </div>

                </div>

            </div>
        </div>
    );
}