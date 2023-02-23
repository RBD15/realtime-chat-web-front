import React, { useReducer } from 'react'
import { createContext } from 'react'
import { chatReducer } from './chatReducer'

export const ChatContext = createContext()

const initialState = {
    uid:'',
    chatActivo:null, //UID del usuario al que le quiero escribir
    usuarios:[],
    mensajes:[]
  //   mensajes:    [
  //     {
  //       user_to:"6399310270a491558c08a588",
  //       user_from:"6399310270a491558c08a",
  //       content:"Test which is a new approach to have all solutions",
  //       date:"11:01 AM | June 9"
  //     },
  //     {
  //         user_to:"6399310270a491558c08a",
  //         user_from:"6399310270a491558c08a588",
  //         content:"New approach to have all solutions",
  //         date:"11:02 AM | June 9"
  //     },
  //     {
  //         user_to:"6399310270a491558c08a",
  //         user_from:"6399310270a491558c08a588",
  //         content:"Have all solutions",
  //         date:"12:01 AM | June 9"
  //     }   
  // ]
}

export const ChatProvider = ({children}) => {
    const [chatState,dispatch] = useReducer(chatReducer,initialState )
  return (
    <ChatContext.Provider value={{chatState,dispatch}}>
        {children}
    </ChatContext.Provider>
  )
}
