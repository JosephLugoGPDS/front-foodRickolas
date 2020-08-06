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
    //State con los datos del formulario
    const [cliente, guardarCliente] = useState({});
    //State con los datos del formulario
    const [personal, guardarPersonal] = useState({});


    const { email, password } = usuario;
    const {emailCliente, passwordCliente } = cliente;
    const {emailPersonal, passwordPersonal } = personal;

    //Iniciar sesion en el servidor
    const iniciarSesion = async e => {
        e.preventDefault();
        //autenticar usuario
        try {
            const respuesta = await clienteAxios.post('/signin', usuario);
            //console.log(respuesta);
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

    const iniciarPersonal = async e => {
        e.preventDefault();
        //autenticar usuario
        try {
            const respuesta = await clienteAxios.post('/signin', personal);
            //console.log(respuesta);
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
            props.history.push('/pedidospersonal');//redireccionar

        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Hubo un error',
                text: error.response.data.message
            })
        }
    }

    const iniciarCliente = async e=>{
        e.preventDefault();
        try {
            const client = await clienteAxios.post('/signinCliente', cliente);
            
            //colocar en el state
            guardarAuth({
                token: '',
                auth: true
            })
            guardarCliente(client.data)
            //alerta
            Swal.fire(
                'Login Correcto',
                'Has iniciado sesion',
                'success'
            )
            //Guardamos el id en localStorage para definir el cliente
            localStorage.setItem('_id',client.data._id);
            //redireccionar
            props.history.push('/productoscliente')
            
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Hubo un error',
                text: 'login incorrecto'
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

    //almacenar lo que esceribe el cliente en el state
    const leerCliente = e => {
        guardarCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }
    //almacenar lo que esceribe el Personal en el state
    const leerPersonal = e => {
        guardarPersonal({
            ...personal,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <Link
            to={"/"}
            className="btn-last btn-return"
            >
                <i className='bx bx-caret-left-circle' ></i>
            </Link>
            <div className="container login-container">
            <div className="row">

                <div className="col-lg-4 login-form-1">
                    <img src="./assets/img/human-client.png"  alt="personal"/>
                    <h3>Cliente</h3>
                    <form
                    onSubmit={iniciarCliente}
                    >
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={emailCliente}
                                className="form-control"
                                placeholder="Correo"
                                onChange={leerCliente}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                value={passwordCliente}
                                className="form-control"
                                placeholder="Contraseña"
                                onChange={leerCliente}
                            />
                        </div>
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

                <div className="col-lg-4 login-form-2">
                <img src="./assets/img/human-admin.png"  alt="personal"/>
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

                <div className="col-lg-4 login-form-1">
                <img src="./assets/img/human-personal.png" alt="personal"/>
                    <h3>Personal</h3>
                    <form
                        onSubmit={iniciarPersonal}
                    >
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={emailPersonal}
                                className="form-control"
                                placeholder="Correo"
                                onChange={leerPersonal}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                value={passwordPersonal}
                                className="form-control"
                                placeholder="Contraseña"
                                onChange={leerPersonal}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Ingresar" />
                        </div>
                    </form>
                </div>


            </div>
        </div>
        </div>

    )
}
export default withRouter(LoginScreen);