import { types } from "../../type/type";

export const chatReducer = (state,action)=>{
    switch(action.type){
        case types.cargarUsuarios:
            // console.log('Cargar',action.payload)
            return {...state,usuarios:[...action.payload],mensajes:[]}
        case types.seleccionarChat:
            // console.log('Seleccionar',action.userId)
            return {...state,chatActivo:action.payload.userId,mensajes:action.payload.messages}
        case types.showChat:
            // console.log('Mostrar',action.userId)
            return {...state,mensajes:action.payload}
        case types.addMessage:
            // console.log('Message',action.payload)
            return {...state,mensajes:[...state.mensajes,action.payload]}
        default:
            return {...state,mensajes:[],chatActivo:''};
    }

}