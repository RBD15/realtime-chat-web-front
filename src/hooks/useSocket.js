import { useCallback, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { ChatContext } from '../context/chat/ChatContext';
import { types } from '../type/type';


export const useSocket = ( serverPath ) => {
    
    const [socket,setSocket] = useState(null)
    const [ online, setOnline ] = useState(false);
    const {dispatch} = useContext(ChatContext)

    const conectarSocket = useCallback(()=>{
        const token = localStorage.getItem('token')
        const socketTemp = io.connect( serverPath, { 
            transports: ['websocket'],
            autoConnect:true,
            forceNew: true,
            query:{
                'Authorization':token
            }
        })
        setSocket(socketTemp)
    })

    const desconectarSocket = useCallback(()=>{
        if(socket)
            socket.disconnect()
    },[socket])

    useEffect(() => {
        if(socket)
            setOnline( socket.connected );
    }, [socket])

    useEffect(() => {
        if(socket)
            socket.on('connect', () => setOnline( true ));
    }, [ socket ])

    useEffect(() => {
        if(socket)
            socket.on('disconnect', () => setOnline( false ));
    }, [ socket ])

    useEffect(() => {
        if(socket)
            socket.on('get-users', (usuarios) => {
                dispatch({
                    type:types.cargarUsuarios,
                    payload:usuarios
                })
            });
    }, [ socket,dispatch])

    useEffect(() => {
        if(socket)
            socket.on('personal-message', (message) => {
                dispatch({
                    type:types.addMessage,
                    payload:message
                })
            });
    }, [ socket,dispatch])


    return {
        socket,
        online,
        conectarSocket,
        desconectarSocket
    }
}