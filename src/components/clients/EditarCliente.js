import React, { useEffect, useState, useCallback } from 'react';

import Swal from 'sweetalert2';
import './swal2.css'

import { withRouter } from 'react-router-dom';
import clienteAxios from '../../config/axios';
import { Link } from 'react-router-dom';

export const EditarCliente = (props) => {

    //obtener ID
    const { id } = props.match.params;
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


    //Query a la aPI, useCallback y retornar como dependencia id, soluciona el problema, tambien retornar dependencia consultarAPI, Me trabé por 5 horas  on este warning
    const consultarAPI = useCallback(
        async () => {
            const clienteConsulta = await clienteAxios.get(`/clientes/${id}`);
            // console.log(clienteConsulta.data);
            //colocar la data en el state
            datosCliente(clienteConsulta.data);
        }, [id]
    )



    //leer los datos del formulario
    const actualizarState = e => {
        // console.log([e.target.name] +":"+ e.target.value );
        //almacenar lo que se escribe en el state
        datosCliente({
            //obtener una copia del state actual
            ...cliente,
            [e.target.name]: e.target.value
        })
        // console.log(cliente);
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
                    props.history.push('/clientes')
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
        <div>
            <Link
            to={"/"}
            className="btn-last btn-return"
            >
                <i className='bx bx-caret-left-circle' ></i>
            </Link>
        <div className="container login-container-signup">
            
            <img src="/assets/img/human-admin.png"  alt="personal"/>
            <div className="row">
                <div className="col-lg-6 login-form-1 text-center">
                    <h2>Bienvenido Administrador
                    {/* <span className="politica">(SOCIO)</span> */}
                    </h2>
                    {/* <h3>Puede actualizar sus datos</h3> */}
                    {/* <p className="message text-center">Recuerda colocar tu contraseña para validar tus datos</p> */}
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
                            {/* <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                onChange={actualizarState}
                            /> */}
                        </div>
                        <input
                            type="submit"
                            className="btnSubmit"
                            value="Guardar"
                            disabled={validarCliente()}
                        />
                        
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

//HOC es una funcion que toma un componente y return un new component

export default withRouter(EditarCliente);
