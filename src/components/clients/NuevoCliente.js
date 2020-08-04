import React, { useState, useContext } from 'react';

import Swal from 'sweetalert2';

import { withRouter } from 'react-router-dom';
import clienteAxios from '../../config/axios';
import { APIContext } from '../../context/APIContext';

export const NuevoCliente = ({history}) =>{

    const [auth ] = useContext(APIContext)

    //cliente=state guardarCliente=funcion guardar state
    const [cliente, guardarCliente] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        telefono: '',
        dni: ''
    });
    //leer los datos del formulario
    const actualizarState = e => {
        // console.log([e.target.name] +":"+ e.target.value );
        //almacenar lo que se escribe en el state
        guardarCliente({
            //obtener una copia del state actual
            ...cliente,
            [e.target.name]: e.target.value
        });
        // console.log(cliente);
    }

    //Añade en la REST API un cliente nuevo
    const agregarCliente = e => {
        e.preventDefault();

        //enviar peticion con axios
        //nuestra direccion POST del backend
        //pasamos nuestro cliente del state
        clienteAxios.post('/clientes', cliente)
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
                    //Redireccionar a productos,
                    history.push('/')
                }
                

            });
    }

    //validar formulario
    const validarCliente = () => {
        //Destructuring
        const { nombre, apellido, email, password, telefono, dni } = cliente;
        //revisar que los campos esten completos, las prpiedades del objeto tengan contenido
        let valido = !nombre.length || !apellido.length || !email.length || !password.length || !telefono.length || !dni.length;
        //return true false
        return valido;
    }

    //verificar autenticacion
    if(!auth.auth) {
        history.push('signin')
    }

    return (
        <div className="container login-container-signup">
            <img src="./assets/img/human-client.png"  alt="personal"/>
            <div className="row">
                <div className="col-lg-5 login-form-1">
                    <h3>Registrarse</h3>
                    <form
                        //handleSubmit
                        onSubmit={agregarCliente}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="nombre"
                                onChange={actualizarState}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                name="apellido"
                                onChange={actualizarState}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="D.N.I."
                                name="dni"
                                onChange={actualizarState}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Teléfono"
                                name="telefono"
                                onChange={actualizarState}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="email"
                                onChange={actualizarState}
                            />
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                onChange={actualizarState}
                            />
                        </div>
                        <input
                            type="submit"
                            className="btnSubmit"
                            value="Login"
                            disabled={validarCliente()}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

//HOC es una funcion que toma un componente y return un new component

export default withRouter(NuevoCliente);
