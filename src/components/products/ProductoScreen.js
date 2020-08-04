import React from 'react'

import './producto.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { clienteAxios } from "../../config/axios";

//props={producto}
//agregar consultarApi para recargar luego de eliminar la pagina
export const ProductoScreen = ({ producto, consultarApi }) => {
    // console.log(props);//verificar recibimos data de la API
    //capturamos producto.valor en constantes
    //aplicamos destruturing
    const { _id, nombre, imagen, categoria, estado } = producto;

    //eliminar producto
    const eliminarProducto = (idProducto) => {
        Swal.fire({
            title: 'Desea eliminar el producto?',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            customClass: 'custom-cancel'
        }).then((result) => {
            if (result.value) {
                //Llamado a axios
                clienteAxios.delete(`/productos/${idProducto}`)
                    .then(res => {
                        // console.log(res);
                        if (res.status === 200) {//ver
                            Swal.fire({
                                icon: 'warning',
                                text: 'Producto eliminado',
                            })
                        }//ver
                        //llamar a la DB
                        consultarApi();
                    })
            }
        })
    }


    //si estado es true/false mostrar/agotado
    const stock = () => {
        if (estado) {
            return "S/. " + producto.precio;
        } else {
            return 'AGOTADO';
        }
    }
    //estado T/F Button disable: F/T
    const verificarProducto = () => {
        return !estado;
    }

    return (
        <div className="col-lg-6">
            <div className="shop-card">
                <div className="title">
                    {nombre}
                </div>
                <div className="desc">
                    {categoria}
                </div>
                <div className="slider">
                    <figure>
                        <div className="img-shop-card">
                            {/* cambiar la ruta a la hora del deploy , verificamos si hay una imagen con operdor ternario*/}
                            {
                                imagen ? (
                                    <img src={`http://localhost:5000/${imagen}`} alt="producto" />
                                ) : null
                            }
                        </div>
                    </figure>
                </div>
                <div className="cta-products">
                    <div className="price">{stock()}</div>
                </div>
                <div>
                <div className="buttons">
                    <div>
                        <Link to={`/productos/editar/${_id}`} className="btn up">
                        <i className='bx bx-edit-alt' ></i>                           
                        Editar
                        </Link>
                    </div>
                    <div>
                        <button
                            className="btn slide"
                            disabled={verificarProducto()}
                            //el parentesis hace que se realice al instante
                            //por eso usamos el callback
                            onClick={() => eliminarProducto(_id)}
                        >
                            <i className='bx bx-x-circle' ></i>
                        Eliminar
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductoScreen;