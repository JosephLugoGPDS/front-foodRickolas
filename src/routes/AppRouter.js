import React, { Fragment, useContext } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
}
    from 'react-router-dom';

// Components
//Inicio
import { FoodScreen } from '../components/food/FoodScreen';

//Clientes
import { Clientes } from '../components/clients/Clientes';
import { NuevoCliente } from '../components/clients/NuevoCliente';
import { EditarCliente } from '../components/clients/EditarCliente';
import { PoliticaPrivacidad } from '../components/clients/PoliticaPrivacidad';
//PRoductos
import { Productos } from '../components/products/Productos';
import { NuevoProducto } from '../components/products/NuevoProducto'
import { EditarProducto } from '../components/products/EditarProducto';

//Pedidos
import { Pedidos } from '../components/pedidos/Pedidos';
import { NuevoPedido } from '../components/pedidos/NuevoPedido'
import { EditarPedido } from '../components/pedidos/EditarPedido';

//Login
import { LoginScreen } from '../components/auth/LoginScreen';
import { SignUpScreen } from '../components/auth/SignUpScreen';
import { APIContext, APIProvider } from '../context/APIContext';


export const AppRouter = () => {

    //utilizar context en el componente
    const [auth, guardarAuth] = useContext(APIContext);

    return (
        <Router>
            <Fragment>
                <APIProvider value={[auth, guardarAuth]}>

                <Switch>
                    {/* Login personal cliente proximamente */}
                    {/* <Route exact path="/login" component={ LoginScreen} /> */}

                    {/* Home Inicio */}
                    <Route exact path="/" component={ FoodScreen } />
                    
                    {/* Clientes */}
                    <Route exact path="/clientes" component={ Clientes } />
                    <Route exact path="/clientes/nuevo" component={ NuevoCliente } />
                    <Route exact path="/clientes/editar/:id" component={ EditarCliente } />
                    <Route exact path="/politica" component={ PoliticaPrivacidad } />

                    {/* Productos */}
                    <Route exact path="/productos" component={ Productos } />
                    <Route exact path="/productos/nuevo" component={ NuevoProducto } />
                    <Route exact path="/productos/editar/:id" component={ EditarProducto } />

                    {/* Pedidos */}
                    <Route exact path="/pedidos" component={ Pedidos } />
                    <Route exact path="/pedidos/nuevo/:id" component={ NuevoPedido } />
                    <Route exact path="/pedidos/editar/:id" component={ EditarPedido } />

                    {/* Auth */}
                    <Route exact path="/signin" component={ LoginScreen } />
                    <Route exact path="/signup" component={ SignUpScreen } />

                
                </Switch>
                </APIProvider>
            </Fragment>

        </Router>


    )
}
