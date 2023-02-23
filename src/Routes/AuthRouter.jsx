import React, { useContext, useEffect } from 'react'
import { useNavigate, Outlet} from 'react-router-dom';
import { authContext } from '../auth/AuthContext';

export const AuthRouter = () => {

  const navigate = useNavigate()
  const {verifyToken,authUser} = useContext(authContext)

  useEffect(()=>{
    verifyToken()
  },[])

  if(authUser.checking){
    return <h1>Espere un momento</h1>
  }

  if(authUser.logged){
     navigate("/chat")
  }

  return (
    <Outlet/>
    // <Routes>
    //  <Route exact path='/register' element={<Register/>}/>
      // <Route exact path='/login' element={<Login/>}/> 
    // </Routes>
   )
}
