import React, { useContext,useEffect } from 'react'
import { useNavigate, Outlet} from 'react-router-dom';
import { authContext } from '../auth/AuthContext';

export const ChatRouter = () => {

  const {authUser,verifyToken} = useContext(authContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(authUser.logged===false){
      navigate("/login")
    }

    verifyToken()
  },[])

  return (
    <Outlet/>
    // <Routes>
    //     {/* <Route exact path='/chat' element={<Chat/>}/> */}
    // </Routes> 
    )
}
