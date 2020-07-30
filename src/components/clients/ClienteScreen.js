import React from 'react'

import Swal from 'sweetalert2';
import './cliente.css'

import { clienteAxios } from "../../config/axios";
import { Link } from 'react-router-dom';

export const ClienteScreen = ({ cliente, consultarApi }) => {

    // const { _id, nombre, apellido, email, password, telefono, rol, google } = cliente;
    const { _id, nombre, apellido, email, telefono, google } = cliente;

    //const eliminar cliente
    const eliminarCliente = (idCliente) =>{
        Swal.fire({
            title: 'Desea eliminar su cuenta?',           
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            customClass: 'custom-cancel'
          }).then((result) => {
            if (result.value) {
                //Llamado a axios
                clienteAxios.delete(`/clientes/${idCliente}`)
                .then(res =>{
                    // console.log(res);
                    Swal.fire({
                      icon: 'warning',
                      text: 'Cuenta de usuario eliminada.',
                  })
                  //llamar a la DB
                  consultarApi();
                })
            }
          })
    }


    //si es usuario de google es VIP/Socio
    const privilegio = () =>{
        if(google) {
            return 'VIP'
        } else {
            return 'SOCIO'
        }
    }

    return (
        <div className="client col-lg-6">
            <h4><span>{nombre} {apellido}</span></h4>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Cliente</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Email</th>
                        <th scope="col">Privilegio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Cliente">{nombre} {apellido}</td>
                        <td data-label="Teléfono">{telefono}</td>
                        <td data-label="Email">{email}</td>
                        <td data-label="Privilegio">{privilegio()}</td>
                    </tr>
                </tbody>
            </table>
            <div className="buttons">
                {/* <button className="fill">Fill In</button> */}
                <Link to={`/clientes/editar/${_id}`} className="btn up">Editar</Link>
                <Link to={`/pedidos/nuevo/${_id}`} className="btn fill">Pedido</Link>
                <button 
                className="btn slide"
                //el parentesis hace que se realice al instante
                //por eso usamos el callback
                onClick = {() =>eliminarCliente(_id)}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default ClienteScreen;
