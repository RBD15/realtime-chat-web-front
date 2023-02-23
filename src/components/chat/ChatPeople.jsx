import React, { Fragment } from 'react'
import { useContext } from 'react'
import { authContext } from '../../auth/AuthContext'
import { ChatContext } from '../../context/chat/ChatContext'
import {SocketContext} from '../../context/SocketContext'
import { scrollToBottom } from '../../helpers/scroll-to-bottom'
import { types } from '../../type/type'

export const ChatPeople = ({chat}) => {
    const {chatState,dispatch} = useContext(ChatContext)
    const {authUser} = useContext(authContext)
    const {socket} = useContext(SocketContext)

    const selected=()=>{
        // console.log('Event',chat.name)
        if(chat.uid!=chatState.chatActivo)
            socket.emit('get-messages',chat.uid)
            socket.on('chat-messages',(payload)=>{
                // console.log('Mensajes chat',payload)
                dispatch({
                    type:types.seleccionarChat,
                    payload:{userId:chat.uid,messages:payload}
                })
            })
        scrollToBottom('mensajes')
    }

    return (
        (()=>{
            if(chat.uid!=authUser.uid)
                return (
                    <div className={chat.online ? "chat_list chat_active" : "chat_list"} onClick={selected}>
                        <div className="chat_people">
                            <div className="chat_img">
                                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                            </div>
                            <div className="chat_ib" key={chat.name}>
                                <h5>{chat.name}</h5>
                                {(chat.online)
                                ?<span className="text-success">Online</span>
                                :
                                <Fragment>
                                    <span className="text-danger">Offline</span>
                                    {/* <h5>{chat.userName} <span className="chat_date">{chat.chatDate}</span></h5> */}
                                    <p>{chat.email}</p>
                                </Fragment>
                                }
                            </div>
                            <div className="extra_space"></div>
                        </div>
                    </div>
                )
        })()
    )
}
