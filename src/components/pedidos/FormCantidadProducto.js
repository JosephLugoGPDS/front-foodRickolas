import React from 'react'

// export const FormCantidadProducto = ({producto}) => {
export const FormCantidadProducto = (props) => {
    //Destructuring a props
    const {producto, restarProductos,sumarProductos, eliminarProductoPedido ,index} =props;

    return (
        <div className="cart__body add-scroll">

            <div className="cart__body__content u-flex u-relative">


                <div className="cart__body__content__img u-flex-center">
                    <img src={`http://localhost:5000/${producto.imagen}`} alt="Nombre producto" />
                </div>
                <div className="cart__body__content__description u-flex">
                    <h2>{producto.nombre}</h2>
                    {/* <p>3 x Bs 500</p> */}
                    
                        <div className="acciones color-gris">
                            <div className="contenedor-cantidad">
                                <i className="fas fa-minus"
                                onClick={() => restarProductos(index)}
                                ></i>
                                {producto.cantidad}
                                <i className="fas fa-plus"
                                onClick={() => sumarProductos(index)}
                                ></i>
                            </div>
                        </div>
                        <div className="inline-block color-gris">
                            Precio: {producto.precio}
                        </div>
                    
                </div>


                <button 
                    type="button"
                    className="cart__body__content__close"
                    onClick={() =>eliminarProductoPedido(producto.producto)}
                    >
                        
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>

    )
}
