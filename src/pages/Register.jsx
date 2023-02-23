import React, { useContext, useState } from "react";
import { authContext } from "../auth/AuthContext";
import Swal from "sweetalert2";
import '../css/main.css'

function Register() {

    const {register} = useContext(authContext)

    const initialState = {
        name:'',
        email:'',
        password:''
    }
    const [userRegister,setUserRegister] = useState(initialState)

    const onSubmit = async(event)=>{
        event.preventDefault()

        const registerResult = await register(userRegister.name,userRegister.email,userRegister.password)

        if(!registerResult)
            return Swal.fire('Error',"Verique la informacion ingresada","error")

        return  Swal.fire('Registered',"Bienvenido","success")

    }   

    function onChange({target}){
        const {name,value}=target
        setUserRegister({
            ...userRegister,[name]:value
        })
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <form className="login100-form validate-form flex-sb flex-w" onSubmit={onSubmit}>
                        <span className="login100-form-title mb-3">
                            Chat - Registro
                        </span>

                        <div className="wrap-input100 validate-input mb-3">
                            <input className="input100" type="text" id="name" name="name" value={userRegister.name} onChange={onChange} placeholder="Nombre" required />
                            <span className="focus-input100"></span>
                        </div>


                        <div className="wrap-input100 validate-input mb-3">
                            <input className="input100" type="email" id="email" name="email" value={userRegister.email} onChange={onChange} placeholder="Email" required />
                            <span className="focus-input100"></span>
                        </div>


                        <div className="wrap-input100 validate-input mb-3">
                            <input className="input100" type="password" id="password" name="password" value={userRegister.password} onChange={onChange} placeholder="Password" required />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="row mb-3">
                            <div className="col text-right">
                                <a href="login.html" className="txt1">
                                    Ya tienes cuenta?
                                </a>
                            </div>
                        </div>

                        <div className="container-login100-form-btn m-t-17">
                            <button className="login100-form-btn">
                                Crear cuenta
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}

export default Register