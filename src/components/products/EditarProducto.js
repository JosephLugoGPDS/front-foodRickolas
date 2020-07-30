import React, { useState, useEffect, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import clienteAxios from '../../config/axios';
import { Spinner } from '../ui/Spinner';
import Swal from 'sweetalert2';

export const EditarProducto = (props) => {

    //obtener el id de props
    const { id } = props.match.params;
    //producto=sate, guardarArchivo=funtiion actualizar
    const [producto, guardarProducto] = useState({
        categoria: '',
        nombre: '',
        precio: '',
        imagen: '',
    });
    //En caso quiera cambiar de imagen
    //archivo=state, guardarArchivo=setState
    const [archivo, guardarArchivo] = useState('');

    //Consulta Api obtener producto
    const consultarApi = useCallback(
        async () => {
            const productoConsulta = await clienteAxios.get(`/productos/${id}`);
            // console.log(productoConsulta.data)
            guardarProducto(productoConsulta.data);
        },[id]
    )

    
    //leer los datos del formulario
    const leerInfoProducto = e => {
        guardarProducto({
            //obtener una copia y luego agregar uno nuevo
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    //cuando el componente carga
    useEffect(() => {
        consultarApi();
    }, [consultarApi])

    
    //Editar el producto en la DB
    const editarProducto = async e => {
        e.preventDefault();
        
        //crear un formdata para la img
        const formData = new FormData();
        formData.append('categoria', producto.categoria);
        formData.append('nombre', producto.nombre);
        formData.append('precio', producto.precio);
        //Al editar pasar un estado de true a un producto eliminado
        formData.append('estado',true);
        formData.append('imagen', archivo);//archivo=state

        //almacenar en la DB
        try {
            const res = await clienteAxios.put(`/productos/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });
            //lanzar una alerta
            if (res.status === 200) {
                // console.log(res);
                Swal.fire({
                    icon: 'success',
                    html:
                        '<h2 className="dg">Producto actualizado</h2>' +
                        'su producto ya está disponible'
                });
            }
            //Redireccionar
            props.history.push('/productos')

        } catch (error) {
            console.log(error);
            //lanzar alerta
            Swal.fire({
                icon: 'error',
                title: 'Ops...',
                text: 'Vuelva a intentarlo!'
            });
        }

    }


    //colocar imagen
    const leerArchivo = e => {
        // console.log(e.target.files)
        //capturar la imagen antes del agregarProducto
        //tambien capturar files.[0];
        guardarArchivo(e.target.files[0]);
    }

    //actualizar estado

    //extraer los valores de state
    const { categoria, nombre, precio, imagen } = producto;

    if (!nombre) return <Spinner />


    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-lg-5 login-form-1">
                    <h3>Editar producto</h3>
                    <form
                        //handleSuibmit
                        onSubmit={editarProducto}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="nombre"
                                //convertir a Uncontrolcomponent
                                //onChange y defaultValue
                                //usuario tiene el control
                                onChange={leerInfoProducto}
                                defaultValue={nombre}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Categoria"
                                name="categoria"
                                onChange={leerInfoProducto}
                                defaultValue={categoria}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Precio"
                                name="precio"
                                min="0.00"
                                step="0.50"
                                onChange={leerInfoProducto}
                                defaultValue={precio}
                            />
                        </div>

                            {/* Verificar imagen */}
                            {producto.imagen ? (
                                <img
                                    src={`http://localhost:5000/${imagen}`}
                                    alt="imagen"
                                    width="250px"
                                />
                            ) : null}
                            {/* Verificar imagen fin */}

                        {/* file */}
                        <button id="open-file">
                            <span><i className='bx bx-folder'></i></span>
                        </button>
                        <div className="box">
                            <input
                                id="file-open"
                                type="file"
                                onChange={leerArchivo}
                                name="imagen"
                            // defaultValue={imagen}
                            />
                        </div>
                        {/* fin file */}
                        <input
                            type="submit"
                            className="btnSubmit"
                            value="Guardar"
                        />
                        <p className="message text-center">Recuerda subir una imagen picka en la carpeta
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(EditarProducto);