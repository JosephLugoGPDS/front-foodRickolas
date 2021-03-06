import React, { useState, useEffect } from 'react'
import clienteAxios from '../../config/axios';
import PedidoScreen from './PedidoScreen';
import { Spinner } from '../ui/Spinner';
import { NavbarPersonal } from '../ui/NavbarPersonal';

export const PedidosPersonal = () => {

    const [pedidos, guardarPedidos] = useState([]);

    useEffect(() => {
        const consultarApi = async () => {
            //obtener los pedidos
            const resultado = await clienteAxios.get('/pedidos')
            guardarPedidos(resultado.data);
        }
        consultarApi();
    }, [])

    if(!pedidos.length) return <Spinner />

    return (
        <div>
        <NavbarPersonal />
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
        </div>
    )
}
