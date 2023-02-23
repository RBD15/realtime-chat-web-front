import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../../auth/AuthContext'
import { ChatContext } from '../../context/chat/ChatContext'
import {types} from '../../type/type'
export const HeadingSearch = () => {

    const {authUser,logout} = useContext(authContext)
    const {dispatch}= useContext(ChatContext)

    const navigate = useNavigate()
    const onSubmit=()=>{
        logout()
        dispatch({
            type:types.cleanChat,
            payload:[]
        })
        navigate('/login')
    }
    return (
        <div className="headind_srch">
            <div className="recent_heading mt-2">
                <h4>{authUser.name}</h4>
            </div>
            <div className="srch_bar">
                <div className="stylish-input-group">
                    <button className="btn text-danger" onClick={onSubmit} >
                        Salir
                    </button>
                </div>
            </div>
        </div>
    )
}
