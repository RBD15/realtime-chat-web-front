import React from 'react'
import { ChatPeople } from './ChatPeople'
import { useContext } from 'react'
import { ChatContext } from '../../context/chat/ChatContext'

export const ChatList = () => {
    const {chatState} = useContext(ChatContext)

    return (
        <div className="chat_list">
            {chatState.usuarios.map((user)=>{
                return <ChatPeople chat={user} key={user.name}></ChatPeople>
            })}
        </div>
    )
}
