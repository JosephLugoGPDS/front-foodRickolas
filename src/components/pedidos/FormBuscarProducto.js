import React from 'react'

export const FormBuscarProducto = (props) => {

    return (
        <div>
            <form 
                className="client contact-form"
                onSubmit={props.buscarProducto}
            >
                <p className="color-gris">Busca un Producto y agrega una cantidad</p>

                
                    <div className="btn-group field-container">
                        <i className='bx bxs-hand-right'></i>
                        <input
                            className="client input"
                            type="text"
                            placeholder="Nombre Productos"
                            name="productos"
                            onChange={props.leerDatosBusqueda}
                        />
                    </div>
                

                <button
                    type="submit"
                    className="btn up"
                    value="Buscar Producto"
                >
                <i className='bx bx-search'></i>
                 Buscar Producto
                </button>

            </form>
        </div>
    )
}
