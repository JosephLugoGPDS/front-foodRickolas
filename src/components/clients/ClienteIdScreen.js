import React, { useState, useCallback, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';

export const ClienteIdScreen = () => {
    //obtener id
    // console.log(localStorage.getItem('_id'))
    const id = localStorage._id;
    // console.log(id);

    //cliente=state datosCliente=funcion guardar state
    const [cliente, datosCliente] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        dni: '',
        email: '',
        password: ''
    });

    //Query a la aPI, useCallback y
    const consultarAPI = useCallback(
        async () => {
            const clienteConsulta = await clienteAxios.get(`/clientes/${id}`);
            console.log(clienteConsulta.data);
            //colocar la data en el state
            datosCliente(clienteConsulta.data);
        }, [id]
    )

    //leer los datos del formulario
    const actualizarState = e => {
        //almacenar lo que se escribe en el state
        datosCliente({
            //obtener una copia del state actual
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    //useEffect, cuando el componente carga
    useEffect(() => {
        consultarAPI();
    }, [consultarAPI]);

    //Añade en la REST API un cliente nuevo
    const actualizarCliente = e => {
        e.preventDefault();

        //enviar la peticion por axios para actualizar
        clienteAxios.put(`/clientes/${cliente._id}`, cliente)
            .then(res => {
                // console.log(res);
                if (res.data.code === 11000) {
                    Swal.fire({
                        showConfirmButton: false,
                        icon: 'error',
                        html:
                            '<h2>Ops...</h2>, ' +
                            'Email ya registrado!'
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Datos Actualizados...',
                        text: 'Vuelva a nuestro menú'
                    });
                    //Redireccionar a productos, modificar
                    // props.history.push('/')
                }

            })
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


    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-lg-5 login-form-1">
                    <h2>Bienvenido {cliente.nombre} <span className="politica">(SOCIO)</span></h2>
                    <h3>Puede actualizar sus datos</h3>
                    <p className="message text-center">Recuerda colocar tu contraseña para validar tus datos</p>
                    <form
                        //handleSuibmit
                        onSubmit={actualizarCliente}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="nombre"
                                onChange={actualizarState}
                                value={cliente.nombre}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                name="apellido"
                                onChange={actualizarState}
                                value={cliente.apellido}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="D.N.I."
                                name="dni"
                                onChange={actualizarState}
                                value={cliente.dni}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Teléfono"
                                name="telefono"
                                onChange={actualizarState}
                                value={cliente.telefono}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="email"
                                onChange={actualizarState}
                                value={cliente.email}
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
                            value="Guardar"
                            disabled={validarCliente()}
                        />
                        <p className="message text-center">Deseas Regresar?
                        <Link to="/" className="politica">Menú Principal</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ClienteIdScreen);
