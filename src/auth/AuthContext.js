import React, { createContext, useCallback, useState } from 'react'
import {fetchWithoutToken,fetchWithToken} from '../helpers/fetch';

export const authContext = createContext();

const initialState={
    uid:null,
    name:null,
    checking:true,
    logged:false,
    email:null
}


export const AuthProvider = ({children}) => {

    const [authUser,setAuthUser]= useState(initialState)

    const login = async(password,email)=>{

      const response = await fetchWithoutToken('login',{password,email},'POST')
      if(!response.error){
        localStorage.setItem("token",response.token)
        const {user} = response

        setAuthUser((authUser)=>({
          uid:user.uid,
          name:user.name,
          checking:false,
          logged:true,
          email:user.email
        }))
        return true
      }
      return false
    }

    const register = async(name,email,password)=>{
      const response = await fetchWithoutToken('login/new',{name,email,password},'POST')

      if(!response.error)
        localStorage.setItem("token",response.token)

      if(!response.error){
        const {user} = response

        setAuthUser((authUser)=>({
          uid:user.uid,
          name:user.name,
          checking:false,
          logged:true,
          email:user.email
        }))
        return true
      }

      return false
    }

    const verifyToken = useCallback( async()=>{
      const token = localStorage.getItem('token')

      if(token!=undefined && token!=''){
        const response = await fetchWithToken('login/new/token',null,'POST',token)
        // console.log(response)
        if(!response.error){
          const {user,newToken} = response
          localStorage.setItem('token',newToken)

          setAuthUser((authUser)=>({
            uid:user.uid,
            name:user.name,
            checking:false,
            logged:true,
            email:user.email
          }))
          return true
        }
      }

      setAuthUser((authUser)=>({
        uid:null,
        name:null,
        checking:false,
        logged:false,
        email:null
      }))

      return false
    },[])

    const logout= ()=>{
      localStorage.removeItem('token')

      setAuthUser((authUser)=>({
        uid:null,
        name:null,
        checking:true,
        logged:false,
        email:null
      }))
      return
    }
    
  return (
    <authContext.Provider value={{
        login,
        register,
        verifyToken,
        logout,
        authUser
    }}>
        {children}
    </authContext.Provider>
  )
}
