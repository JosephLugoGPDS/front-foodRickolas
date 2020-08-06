import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';



export const SignUpScreen = ({ history }) => {

    const [cliente, guardarCliente] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        telefono: '',
        email: '',
        password: '',
        confirmar: ''
    });


    const onChange = e => {
        guardarCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        //pasamos nuestro cliente del state
        // clienteAxios.post('/clientes', cliente)
        clienteAxios.post('/signupcliente', cliente)
            //retornamos la promesa
            .then(res => {
                //validar si hay errores de rango
                // console.log(res);
                if (res.data.code === 11000) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ops...',
                        text: 'Email ya registrado!'
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Registro exitoso',
                        text: res.data.message
                    });
                    //Almaceno en el localStorage al cliente
                    //  localStorage.setItem('_id',client.data._id)
                    //Redireccionar a productos,
                    history.push('/');
                }


            });
    }

    //validar formulario
    const validarCliente = () => {
        //Destructuring
        const { nombre, apellido, email, password, telefono, dni, confirmar } = cliente;
        //revisar que los campos esten completos, las prpiedades del objeto tengan contenido
        let valido = !nombre.length || !apellido.length || !email.length || !password.length || !telefono.length || !dni.length & password === confirmar;
        //return true false
        return valido;
    }

    return (
        <div>
            <Link
                to={"/productoscliente"}
                className="btn-last btn-return"
            >
                <i className='bx bx-caret-left-circle' ></i>
            </Link>
            <div className="container login-container-signup">
                <img
                    src="./assets/img/human-client.png" alt="personal" />
                <div className="row">
                    <div className="col-lg-5 login-form-1">

                        <h3>Crear una cuenta</h3>
                        <form
                            //handleSubmit
                            onSubmit={onSubmit}
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="nombre"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="nombre"
                                    onChange={onChange}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Apellido"
                                    name="apellido"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="dni"
                                    className="form-control"
                                    placeholder="D.N.I."
                                    name="dni"
                                    onChange={onChange}
                                />
                                <input
                                    type="text"
                                    id="telefono"
                                    className="form-control"
                                    placeholder="Teléfono"
                                    name="telefono"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="email"
                                    onChange={onChange}
                                />
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="password"
                                    onChange={onChange}
                                />
                                <input
                                    type="password"
                                    id="confirmar"
                                    className="form-control"
                                    placeholder="Repetir Contraseña"
                                    name="confirmar"
                                    onChange={onChange}
                                />
                            </div>
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Registrarse"
                                disabled={validarCliente()}
                            />
                            <p className="message text-center">Leíste los términos?
                        <Link to={'/politica'} className="politica">Política y Privacidad</Link>
                            </p>
                            <p className="message text-center">Volver?
                        <Link to={'/signin'} className="politica">Iniciar Sesión</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(SignUpScreen);
