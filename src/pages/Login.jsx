import React, { useState, useEffect, useContext} from "react";
import { authContext } from "../auth/AuthContext";
import '../css/main.css'
import Swal from "sweetalert2";
function Login() {

    const {login}= useContext(authContext)
    const [form,setForm] = useState({
        email:'test@correo.com',
        password:'1234',
        rememberme:true
    })


    useEffect(() => {
        const lastEmail=localStorage.getItem('email')
        if(lastEmail){
            setForm({...form,['email']:lastEmail})
        }
    }, [])
    

    const onChange = ({target})=>{
        const {name,value} = target
        
        setForm({
            ...form,[name]:value
        })
    }

    const toggleRememberMe = ()=>{
        setForm({
            ...form,rememberme:!form.rememberme
        })
    }

    const onSubmit=async(event)=>{
        event.preventDefault();
        if(form.rememberme){
            localStorage.setItem('email',form.email)
        }else{
            localStorage.removeItem('email')
        }
    
        const loginResult=await login(form.password,form.email);

        if(!loginResult)
            return Swal.fire('Error',"Verique el usuario o contrasena","error")

        return  Swal.fire('Logged',"Bienvenido","success")

    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <form className="login100-form validate-form flex-sb flex-w" onSubmit={onSubmit}>
                        <span className="login100-form-title mb-3">
                            Chat - Ingreso
                        </span>

                        <div className="wrap-input100 validate-input mb-3">
                            <input className="input100" type="email" name="email" value={form.email} placeholder="Email" onChange={onChange} required/>
                            <span className="focus-input100"></span>
                        </div>


                        <div className="wrap-input100 validate-input mb-3">
                            <input className="input100" type="password" name="password" value={form.password} placeholder="Password" onChange={onChange} required/>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="row mb-3" onClick={toggleRememberMe}>
                            <div className="col">
                                <input className="input-checkbox100" id="ckb1" type="checkbox" name="rememberme" checked={form.rememberme} readOnly/>
                                <label className="label-checkbox100">
                                    Recordarme
                                </label>
                            </div>

                            <div className="col text-right">
                                <a href="register.html" className="txt1">
                                    Nueva cuenta?
                                </a>
                            </div>
                        </div>

                        <div className="container-login100-form-btn m-t-17">
                            <button className="login100-form-btn">
                                Ingresar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}

export default Login