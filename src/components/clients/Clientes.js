import React, { useEffect, useState, Fragment, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
//Importar clienteAxios
import clienteAxios from '../../config/axios';


//components
//importar Cliente
import ClienteScreen from './ClienteScreen'
import Navbar from '../ui/Navbar';
//spinner
import { Spinner } from '../ui/Spinner';

//importar context
import { APIContext } from '../../context/APIContext';




export const Clientes = (props) => {
    const [clientes, guardarClientes] = useState([]);

    //utilizar valores de context
    // const [ auth, guardarAuth ] = useContext( APIContext);
    const [auth] = useContext(APIContext);
    // console.log(auth)


    useEffect(() => {
        if (auth.token !== '') {
            //Query a la Api
            const consultarApi = async () => {
                try {
                    const clientesConsulta = await clienteAxios.get('/clientes', {
                        headers: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    });
                    //colocar el resultado en el state
                    guardarClientes(clientesConsulta.data);
                } catch (error) {
                    //Error con authorization
                    if (error.response.status === 500) {
                        props.history.push('/signin')
                    }
                }

            }
            consultarApi();
        } else {
            props.history.push('/signin');
        }
    }, [auth, props.history]);

    //Si el state esta como false
    if (!auth.auth) {
        props.history.push('/signin');
    }



    //Spinner de carga si hay clientes/s
    if (!clientes.length) return <Spinner />

    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <Link to="/clientes/nuevo" className="btn fill">Nuevo Cliente</Link>
                <div className="row">
                    {
                        //clientes.map(collback)
                        clientes.map(cliente => (
                            <ClienteScreen
                                key={cliente._id}
                                cliente={cliente}
                            //Usar si consultarApi esta afuera del state
                            //consultarApi={consultarApi}
                            />
                        )
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(Clientes);
