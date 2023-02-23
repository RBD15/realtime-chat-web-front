import React from "react";
import '../css/chat.css'
import { Messages } from "../components/chat/Messages";
import {ImboxPeople} from "../components/chat/ImboxPeople"

function Chat() {
    return (
        <div className="messaging">
            <div className="inbox_msg">
                <ImboxPeople></ImboxPeople>
                <Messages ></Messages>
            </div>
        </div>
    )
}
export default Chat