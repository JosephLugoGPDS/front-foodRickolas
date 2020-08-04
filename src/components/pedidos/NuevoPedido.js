import React, { useEffect, useState } from 'react'
import './pedidos.css'
import { withRouter } from 'react-router-dom'

import clienteAxios from '../../config/axios'

import { FormBuscarProducto } from './FormBuscarProducto'
import Swal from 'sweetalert2'
import { FormCantidadProducto } from './FormCantidadProducto'

export const NuevoPedido = (props) => {

    //extraer id del cliente
    //console.log(props.match.params.id)
    const { id } = props.match.params;

    // state
    const [cliente, guardarCliente] = useState({});
    const [busqueda, guardarBusqueda] = useState('');
    const [productos, guardarProductos] = useState([]);
    const [total, guardarTotal] = useState(0);
    const [direccion, guardarDireccion] = useState('');

    useEffect(() => {

        //obtener cliente
        const ConsultarApi = async () => {
            //consultar el cliente actual
            const resultado = await clienteAxios.get(`/clientes/${id}`);
            // console.log(resultado.data)
            guardarCliente(resultado.data);
        }
        //Llamar a la Api
        ConsultarApi();

        //actualizar total a pagar
        actualizarTotal();

        //La dependencia producto actualiza automaticamente 
        //los productos luego de hacer cambios, etc
    }, [productos, id]);

    const buscarProducto = async e => {
        e.preventDefault();

        //obtener los productos de la busqueda
        const resultadoBusqueda = await clienteAxios.post(`/productos/busqueda/${busqueda}`);
        //si no hay resultado alerta, contrario agregar state
        if (resultadoBusqueda.data[0]) {
            // console.log(resultadoBusqueda.data);
            let productoResultado = resultadoBusqueda.data[0];
            //agregar la llave "producto" copiamos id producto
            productoResultado.producto = resultadoBusqueda.data[0]._id;
            productoResultado.cantidad = 0;
            // console.log(productoResultado);
            //colocar en el state el producto
            //...productos:save copy of products
            guardarProductos([...productos, productoResultado]);

        } else {
            //no hay resultados
            Swal.fire({
                icon: 'error',
                title: 'No hay resultados',
                text: 'Intentalo otra vez'
            })
        }

    }
    //almacenar una busqeuda en el state
    const leerDatosBusqueda = e => {
        guardarBusqueda(e.target.value);
    }

    //actualizar la cantidad de productos
    const restarProductos = i => {
        // console.log('uno menos...', i)
        //copiar el arreglo original
        const todosProductos = [...productos];

        //validar el 0
        if (todosProductos[i].cantidad === 0) return;

        //decremento
        todosProductos[i].cantidad--;

        //almacenar en el state
        guardarProductos(todosProductos);

    }
    const sumarProductos = i => {
        // console.log('uno mas...', i)
        //copiar el arreglo original
        const todosProductos = [...productos];

        //incremento
        todosProductos[i].cantidad++;

        //almacenar en el state
        guardarProductos(todosProductos);

    }

    //Leer direccion
    //leer los datos del formulario
    const leerDireccion = e => {
        guardarDireccion({
            //obtener una copia y luego agregar uno nuevo
            ...direccion,
            [e.target.name]: e.target.value
        })
    }
    // console.log(direccion);

    //Eliminar un producto del state
    const eliminarProductoPedido = id => {
        // console.log(id);
        //filter == retorna el que tiene el id
        //filter !== retorna a todos menos ese id
        const todosProductos = productos.filter(producto =>
            producto.producto !== id
        );
        guardarProductos(todosProductos);
    }


    //Actualizar el total a pagar
    const actualizarTotal = () => {
        //Validar 0
        if (productos.length === 0) {
            guardarTotal(0);
            return;
        }
        // calcular nuevo total
        let nuevoTotal = 0;

        //recorrer todos los productos, cantidades y precios
        productos.map(producto => nuevoTotal += (producto.cantidad * producto.precio));

        // guardar el total
        guardarTotal(nuevoTotal);

    }

    //Almacenar pedido en la DB
    const realizarPedido = async e => {
        e.preventDefault();

        //extraer id
        const { id } = props.match.params;

        //construir el objeto pedido
        const pedido = {
            "cliente": id,
            "pedido": productos,
            "direccion": {
                "calle": direccion.direccion,
                "distrito": "El Agustino"
            },
            "total": total,
            "created_at": new Date()
        }

        console.log(pedido)
        //Almacenar en la DB
        const resultado = await clienteAxios.post(`/pedidos/nuevo/${id}`, pedido);

        //leer el resultado
        if(resultado.status === 200) {
            //Alerta sucees
            Swal.fire({
                icon: 'success',
                html:
                    '<h2 className="dg">Pedido Exitoso</h2>'+
                     'Espere dentro de poco entregaremos su pedido'
            });
        } else {
            //Alerta error
            Swal.fire({
                icon: 'error',
                title: 'No se realizo el pedido',
                text: 'Intentelo otra vez'
            })
        }

        //Redireccionar
        props.history.push('/')

    }



    return (
        <div className="container">

            <form className="client contact-form">
                <h4 className="text-center">Datos del Pedido        </h4>
                    <p className="text-center">
                        <i className='bx bx-user-circle'></i>
                    </p>                
                <h3>
                    {cliente.nombre} {cliente.apellido}
                </h3>
                <p><i className='bx bxs-phone' ></i>
                    {cliente.telefono} 
                    </p>
                <div className="client field-container">
                <textarea 
                className="client input text-area" name="direccion" 
                placeholder="Escriba su dirección"
                onChange={leerDireccion}
                >                    
                </textarea>
                </div>
            </form>
            <p className="color-white">separacion</p>

            <FormBuscarProducto
                buscarProducto={buscarProducto}
                leerDatosBusqueda={leerDatosBusqueda}
            />

            

            {/* ##############card-shopping########### */}
            <div className="card-shopping-cart add-scroll">
                <h1 className="cart__title">
                <i className='bx bxs-cart' ></i>Carrito de compras
                {/* <button (click)="actionBtnClose()"> */}
                    <button>
                        <i className="fas fa-times"></i>
                    </button>
                </h1>

                {/* ###Productos### */}

                <ul>
                    {productos.map((producto, index) => (
                        <FormCantidadProducto
                            key={producto.producto}
                            producto={producto}
                            restarProductos={restarProductos}
                            sumarProductos={sumarProductos}
                            eliminarProductoPedido={eliminarProductoPedido}
                            index={index}
                            actualizarTotal={actualizarTotal}
                        />
                    ))}
                </ul>



                <div className="cart__footer">
                    <p className="cart__footer__title">Total</p>
                    <p className="cart__footer__total">Total a Pagar <span> S/. {total}</span></p>

                    {total > 0 ? (
                        <form
                            onSubmit={realizarPedido}
                        >

                            <button className="btn up btn-block">
                                <i className="fas fa-plus-circle"></i>REALIZAR PEDIDO
                        </button>
                        </form>
                    ) : null}

                </div>
            </div>



        </div>
    )
}

export default withRouter(NuevoPedido)
