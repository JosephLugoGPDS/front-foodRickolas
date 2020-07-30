import React, { useState } from 'react'
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import { withRouter } from 'react-router-dom';

export const NuevoProducto = (props) => {

    //producto=state, guardarPRoducto = setstate
    const [producto, guardarProducto] = useState({
        nombre: '',
        categoria: '',
        precio: ''
    });
    //archivo=state, guardarArchivo=setState
    const [archivo, guardarArchivo] = useState('');


    

    //almacena el producto en la DB
    const agregarProducto = async e =>{
        e.preventDefault();

        //crear un formdata para la img
        const formData = new FormData();
        formData.append('categoria', producto.categoria );
        formData.append('nombre', producto.nombre );
        formData.append('precio', producto.precio );
        formData.append('imagen', archivo);//archivo=state

        //almacenar en la DB
        try {
            const res = await clienteAxios.post('/productos', formData,{
                headers: {
                    "Content-Type": "multipart/form-data"
                  },
            });
            //lanzar una alerta
            if(res.status === 200){
                // console.log(res);
                Swal.fire({
                    icon: 'success',
                    html:
                        '<h2 className="dg">Producto Nuevo</h2>'+
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


    //leer los datos del formulario
    const leerInfoProducto = e => {
        guardarProducto({
            //obtener una copia y luego agregar uno nuevo
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    //colocar imagen
    const leerArchivo = e => {
        console.log(e.target.files)
        //capturar la imagen antes del agregarProducto
        //tambien capturar files.[0];
        guardarArchivo(e.target.files[0]);
    }


    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-lg-5 login-form-1">
                    <h3>Ingresar producto</h3>
                    <form
                    //handleSuibmit
                    onSubmit={agregarProducto}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="nombre"
                                onChange={leerInfoProducto}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Categoria"
                                name="categoria"
                                onChange={leerInfoProducto}
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
                            />
                            {/* <input
                                id="my-file"
                                type="file"
                                className="form-control input-file"
                                placeholder="Imagen"
                                name="imagen"
                                onChange={leerInfoProducto}
                            /> */}

                        </div>
                        {/* file */}

                        <button id="open-file">
                            <span><i className='bx bx-folder'></i></span>
                        </button>
                        <div className="box">
                            <input 
                            id="file-open" 
                            type="file" 
                            onChange={leerArchivo}
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

export default withRouter(NuevoProducto)
