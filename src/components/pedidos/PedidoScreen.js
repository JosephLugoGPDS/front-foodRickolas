import React from 'react';

// import Moment from 'react-moment';
import Moment from 'react-moment';
// import 'moment-timezone';

export const PedidoScreen = ({ pedido }) => {
    // console.log(props);
    //obtenemos pedido(rebundancia name usamos pedido), direccion cliente
    const { direccion, cliente } = pedido;
    // console.log(pedido);

    return (
        <div className="pedido-card">
            <div className="pedido-card-header">
                <h1 className="pedido-card-heading">
                    Delivery <br />
                    <i className='bx bx-book-alt'></i>
                    ID° {pedido._id}
                </h1>
            </div>
            <div className="pedido-card-section">
                <time className="d-flex justify-content-between">
                    <div>
                    <i className='bx bx-calendar' ></i>
                    <Moment format="YYYY/MM/DD">
                        {pedido.created_at}
                    </Moment>
                    </div>
                    <div>
                    <i className='bx bx-time' ></i>
                    <Moment format="HH:mm">
                        {pedido.created_at}
                    </Moment>
                    </div>
                </time>
                <address>
                    <i className='bx bxs-map' ></i>{direccion.calle},
                    <p>
                    <i className='bx bxs-city' ></i>{direccion.distrito}
                    </p>
                </address>
                <h4>
                    <i className='bx bxs-user' ></i>
                    {cliente.nombre} {cliente.apellido}
                    {/* <br /> */}
                </h4>
                    <i className='bx bx-phone-call' ></i>{cliente.telefono}
                    <p>
                    
                    </p>
            </div>
            <div className="pedido-card-section">
                <ul className="product-row">
                    {pedido.pedido.map(articulo => (
                        <li
                            key={pedido._id + articulo.producto._id}
                            className="product-row-item"
                        >
                            <div className="d-flex justify-content-between">
                                <p>{articulo.producto.nombre}</p>
                                <div className="btn-group">
                                    <div className="product-content-img">
                                    <img src={`http://localhost:5000/${articulo.producto.imagen}`} alt={articulo.producto.nombre} />
                                    </div>
                                    <p>{articulo.cantidad}</p>
                                </div>
                            
                            </div>
                        </li>
                    ))}

                    <p className="font-weight-bold"> Total: S/.
                        <span>
                            {pedido.total}
                        </span>
                    </p>
                </ul>
            </div>
        </div>
    )
}

export default PedidoScreen;
