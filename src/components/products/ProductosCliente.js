import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import NavbarCliente from '../ui/NavbarCliente';
import { Spinner } from '../ui/Spinner';
import clienteAxios from '../../config/axios';
// import ProductoScreen from './ProductoScreen';
import { ProductoScreenCliente } from './ProductoScreenCliente';


export const ProductosCliente = () => {

    // //productos = state, guardarProducto = function save sate
    const [productos, guardarProducto] = useState([]);

     // Query a la API
     const consultarApi = async () => {
         const productosConsulta = await clienteAxios.get('/productos');//'/productos' para ver todos
         guardarProducto(productosConsulta.data);
         // console.log(productosConsulta.data);
     }
    //productos = state, guardarProducto = function save sate

    useEffect(()=>{
        consultarApi();
    },[])




    //Spinner de carga
    if(!productos.length) return <Spinner />


    return (
        <Fragment>

            <NavbarCliente />
            <div className="container">
                {/* <Link to="/productos/nuevo" className="btn fill">Nuevo Producto</Link> */}
                <div className="row">
                    {
                        //productos.map(callback)
                        productos.map(producto => (

                            <ProductoScreenCliente
                                key={producto._id}
                                producto={producto}
                                //agrego consultarApi
                                //para que la use ProductoScreen
                                //para recargar la pagina
                                consultarApi={consultarApi}
                            />

                        )
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}
export default withRouter(ProductosCliente);
