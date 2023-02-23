import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { authContext } from '../auth/AuthContext';
import { useSocket } from '../hooks/useSocket'

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

    const { socket, online, conectarSocket, desconectarSocket } = useSocket('http://localhost:8080');
    const { authUser } = useContext( authContext );

    useEffect(()=>{
        if(authUser.logged){
            if(!socket)
                conectarSocket()
        }
    },[authUser,conectarSocket])

    useEffect(()=>{
        if(authUser.logged===false)
            if(socket)
                if(socket.connected)
                    desconectarSocket()
    },[authUser,desconectarSocket])


    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}