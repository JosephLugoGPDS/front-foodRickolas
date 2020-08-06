import React, { useState, useEffect, Fragment } from 'react'
import clienteAxios from '../../config/axios';
import PedidoScreen from './PedidoScreen';
import { Spinner } from '../ui/Spinner';
import { Navbar } from '../ui/Navbar';
import { useContext } from 'react';
import { APIContext } from '../../context/APIContext';
import { withRouter } from 'react-router-dom';
import { FooterUsuario } from '../ui/FooterUsuario';

export const Pedidos = (props) => {

    console.log(props)

    const [pedidos, guardarPedidos] = useState([]);

    const [auth] = useContext(APIContext);

    // useEffect(() => {
    //     const consultarApi = async () => {
    //         //obtener los pedidos
    //         const resultado = await clienteAxios.get('/pedidos')
    //         guardarPedidos(resultado.data);
    //     }
    //     consultarApi();
    // }, [])

    //useEffect para consultar la API cuando cargue
    useEffect(() => {
        if (auth.token !== '') {
            // Query a la API
            const consultarApi = async () => {
                try {
                    const pedidosConsulta = await clienteAxios.get('/pedidos', {
                        headers: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    });//'/productos' para ver todos
                    guardarPedidos(pedidosConsulta.data);
                    // console.log(productosConsulta.data);

                } catch (error) {
                    if (error.response.status === 500) {
                        props.history.push('/signin')
                    }
                }
            }//call to API
            consultarApi();
        } else {
            props.history.push('/signin')
        }

    }, [pedidos,auth.token,props.history]);

    if (!auth.auth) 
        {
            props.history.push('/signin');
            
        } 

    if(!pedidos.length) return <Spinner />

    return (
        <Fragment>
        <Navbar />
        <main>
            Pedidos
            {/* <div className="pedido-card"> */}
            {/* <ul> */}
                {pedidos.map(pedido =>(
                    <PedidoScreen 
                    key={pedido._id}
                    pedido={pedido}
                    />
                ))}
            {/* </ul> */}
        {/* </div> */}
        </main>
        <FooterUsuario/>
        </Fragment>
    )
}

export default withRouter(Pedidos);
