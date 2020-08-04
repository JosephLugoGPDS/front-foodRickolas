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
//Client
import { ClienteIdScreen } from '../components/clients/ClienteIdScreen';
//PRoductos
import { Productos } from '../components/products/Productos';
import { NuevoProducto } from '../components/products/NuevoProducto'
import { EditarProducto } from '../components/products/EditarProducto';


//Pedidos
import { Pedidos } from '../components/pedidos/Pedidos';
import { NuevoPedido } from '../components/pedidos/NuevoPedido'

//Login
import { LoginScreen } from '../components/auth/LoginScreen';
import { SignUpScreen } from '../components/auth/SignUpScreen';
import { APIContext, APIProvider } from '../context/APIContext';

//Productos cliente
import { ProductosCliente } from '../components/products/ProductosCliente';
import { PedidosPersonal } from '../components/pedidos/PedidosPersonal';

export const AppRouter = () => {

    //utilizar context en el componente
    const [auth, guardarAuth] = useContext(APIContext);

    return (
        <Router>
            <Fragment>
                <APIProvider value={[auth, guardarAuth]}>

                    <Switch>

                        {/* Home Inicio */}
                        <Route exact path="/" component={FoodScreen} />

                        {/* Clientes */}
                        <Route exact path="/clientes" component={Clientes} />
                        <Route exact path="/clientes/nuevo" component={NuevoCliente} />
                        <Route exact path="/clientes/editar/:id" component={EditarCliente} />
                        <Route exact path="/politica" component={PoliticaPrivacidad} />

                        {/* Client */}
                        <Route exact path="/cliente/:id" component={ClienteIdScreen} />


                        {/* Productos */}
                        <Route exact path="/productos" component={Productos} />
                        <Route exact path="/productos/nuevo" component={NuevoProducto} />
                        <Route exact path="/productos/editar/:id" component={EditarProducto} />
                        {/* Productos Cliente */}
                        <Route exact path="/productoscliente" component={ProductosCliente} />

                        {/* Pedidos */}
                        <Route exact path="/pedidos" component={Pedidos} />
                        <Route exact path="/pedidospersonal" component={PedidosPersonal} />
                        <Route exact path="/pedidos/nuevo/:id" component={NuevoPedido} />

                        {/* Auth */}
                        <Route exact path="/signin" component={LoginScreen} />
                        <Route exact path="/signup" component={SignUpScreen} />


                    </Switch>
                </APIProvider>
            </Fragment>

        </Router>


    )
}