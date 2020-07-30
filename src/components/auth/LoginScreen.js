import React, { useState, useContext } from 'react'
import './login.css'
import Swal from 'sweetalert2';

//import axios
import { clienteAxios } from "../../config/axios";
//import router
import { withRouter, Link } from "react-router-dom";
import { APIContext } from '../../context/APIContext';

export const LoginScreen = (props) => {

    //Auth y token
    const [auth, guardarAuth] = useContext(APIContext);
    console.log(auth.auth);

    //State con los datos del formulario
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    //Iniciar sesion en el servidor
    const iniciarSesion = async e => {
        e.preventDefault();
        //autenticar usuario
        try {
            const respuesta = await clienteAxios.post('/signin', usuario);
            // console.log(respuesta);
            // extraer el token y colocarlo en localstorage
            const { token } = respuesta.data;
            localStorage.setItem('token', token);
            //colocar en el state
            guardarAuth({
                token,
                auth: true
            })

            //alerta
            Swal.fire(
                'Login Correcto',
                'Has iniciado sesion',
                'success'
            )
            //redireccionar
            props.history.push('/productos');//redireccionar

        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Hubo un error',
                text: error.response.data.message
            })
        }
    }


    //almacenar lo que esceribe el usuario en el state
    const leerDatos = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container login-container">
            <div className="row">


                <div className="col-lg-5 login-form-1">
                    <h3>Cliente</h3>
                    <form>
                        {/* <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div> */}
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>

                        {/* <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                            />
                        </div> */}

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Ingresar" />
                        </div>
                    </form>
                    <p className="message text-center">No tienes una cuenta?
                        <Link to={'/signup'} className="enlace-cuenta">
                            Obtener Cuenta
                        </Link>
                    </p>

                </div>

                <div className="col-lg-5 login-form-2">
                    <h3>Administrador</h3>
                    <form
                        onSubmit={iniciarSesion}
                    >
                        <div className="form-group">

                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Correo"
                                required
                                onChange={leerDatos}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Contraseña"
                                required
                                onChange={leerDatos}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>

                </div>


            </div>
        </div>

    )
}
export default withRouter(LoginScreen);