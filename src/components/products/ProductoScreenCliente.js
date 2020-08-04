import React from 'react'
import { Link } from 'react-router-dom';

export const ProductoScreenCliente = ({producto}) => {
    //aplicamos destruturing a producto
    const {nombre, imagen, categoria, estado} = producto;
    const id = localStorage.getItem('_id');

    //si estado es true/false mostrar/agotado
    const stock = () =>{
        if(estado) {
            return "S/. "+producto.precio;
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
                            ) :null
                        }
                        </div>
                    </figure>
                </div>
                <div className="cta-products">
                    <div className="price">{stock()}</div>
                    <Link
                    to={`/pedidos/nuevo/${id}`} 
                    className="btn"
                    disabled={verificarProducto()}
                    >Add to cart</Link>
                </div>
            </div>
        </div>
    )
}
