import React, { useState, useEffect, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
// importar cliente axios
import clienteAxios from '../../config/axios';

//Components
import ProductoScreen from './ProductoScreen';
import Navbar from '../ui/Navbar';
//spinner
import { Spinner } from '../ui/Spinner';
//context
import { APIContext } from '../../context/APIContext';

export const Productos = (props) => {

    // //productos = state, guardarProducto = function save sate
    const [productos, guardarProducto] = useState([]);

    // // Query a la API
    // const consultarApi = async () => {
    //     const productosConsulta = await clienteAxios.get('/productos');//'/productos' para ver todos
    //     guardarProducto(productosConsulta.data);
    //     // console.log(productosConsulta.data);
    // }
    //productos = state, guardarProducto = function save sate

    const [auth] = useContext(APIContext);

    //useEffect para consultar la API cuando cargue
    useEffect(() => {
        if (auth.token !== '') {
            // Query a la API
            const consultarApi = async () => {
                try {
                    const productosConsulta = await clienteAxios.get('/productos', {
                        headers: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    });//'/productos' para ver todos
                    guardarProducto(productosConsulta.data);
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

    }, [auth.token, props.history]);//agrego la dependencia productos, para que recargue la pagina al eliminar
    //pero si se agrega la dependencia
    //se tiene que usar un cleanUp

    //Si el state esta como false
    
    if (!auth.auth) 
        {
            props.history.push('/signin');
        } 
    
    //Spinner de carga
    if (!productos.length) return <Spinner />

    return (
            
        <div>

            <Navbar />
            <div className="container">
                <Link to="/productos/nuevo" className="btn fill">Nuevo Producto</Link>
                <div className="row">
                    {
                        //productos.map(callback)
                        productos.map(producto => (

                            <ProductoScreen
                                key={producto._id}
                                producto={producto}
                                //agrego consultarApi
                                //para que la use ProductoScreen
                                //para recargar la pagina
                                // consultarApi={consultarApi}
                            />

                        )
                        )
                    }
                </div>
            </div>
        </div>
            
    )
}

export default withRouter(Productos);
