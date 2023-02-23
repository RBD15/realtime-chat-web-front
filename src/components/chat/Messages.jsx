import React, { Fragment } from 'react'
import { SendBar } from "./SendBar";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";
import { EmptyChat } from './EmptyChat';
import { useContext } from 'react';
import { ChatContext } from '../../context/chat/ChatContext';
import { authContext } from '../../auth/AuthContext';

export const Messages = () => {
  const {chatState} = useContext(ChatContext)
  const {authUser} = useContext(authContext)

  return (
    <div className="mesgs">
        <div className="msg_history"
        id="mensajes">
          {(()=>{
              if(chatState.chatActivo){
                return (
                  chatState.mensajes.map(message=>{
                    if(message.user_from==authUser.uid)                      
                      return <OutgoingMessage message={message}></OutgoingMessage>
                    return <IncomingMessage message={message}></IncomingMessage>
                  })
               )
              }else{
                return <EmptyChat/>
              }
          })()} 
        </div>

        <SendBar></SendBar>
    </div>
  )
}
