import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react'
import { authContext } from '../../auth/AuthContext';
import { ChatContext } from '../../context/chat/ChatContext';
import { SocketContext } from '../../context/SocketContext';
import { types } from '../../type/type';
import { scrollToBottom } from '../../helpers/scroll-to-bottom';


export const SendBar = () => {
  const {socket} = useContext(SocketContext)
  const {authUser} = useContext(authContext)
  const {chatState,dispatch} = useContext(ChatContext)
  const message = useRef(null);

  const sendMessage=()=>{
    const currentMessage=message.current.value
    message.current.value=''
    // console.log('Sesion',authUser.uid,chatState.chatActivo)
    const newMessage={
      content:currentMessage,
      user_to:chatState.chatActivo,
      user_from:authUser.uid,
      date:new Date()
    }
    socket.emit('new-message',
    newMessage)

    dispatch({
      type:types.addMessage,
      payload:newMessage
    })
    scrollToBottom('mensajes')

  }

  return (
    <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
            <input type="text" ref={message} name="messages" className="write_msg" placeholder="Mensaje..." />
        </div>
        <div className="col-sm-3 text-center">
            <button className="msg_send_btn mt-3" type="button" onClick={sendMessage}>
                Enviar
            </button>
        </div>
    </div>
  )
}
