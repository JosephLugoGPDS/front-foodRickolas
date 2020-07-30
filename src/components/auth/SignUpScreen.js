import React, { useState } from 'react';
import { Link } from "react-router-dom";



export const SignUpScreen = () => {

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        telefono: '',
        email: '',
        password: '',
        confirmar: ''
    });
    
    const {nombre, apellido, dni, telefono, email, password, confirmar} = usuario;
    
    
    
    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] :  e.target.value
        })
    }
    
    const onSubmit = e =>{
        e.preventDefault();
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-lg-5 login-form-1">
                    <h3>Crear una cuenta</h3>
                    <form
                        //handleSubmit
                        onSubmit={onSubmit}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                id="nombre"
                                className="form-control"
                                placeholder="Nombre"
                                name="nombre"
                                value={nombre}
                                onChange={onChange}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                name="apellido"
                                value={apellido}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="dni"
                                className="form-control"
                                placeholder="D.N.I."
                                name="dni"
                                value={dni}
                                onChange={onChange}
                            />
                            <input
                                type="text"
                                id="telefono"
                                className="form-control"
                                placeholder="Teléfono"
                                name="telefono"
                                value={telefono}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Correo"
                                name="email"
                                value={email}
                                onChange={onChange}
                            />
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                value={password}
                                onChange={onChange}
                            />
                            <input
                                type="password"
                                id="confirmar"
                                className="form-control"
                                placeholder="Repetir Contraseña"
                                name="confirmar"
                                value={confirmar}
                                onChange={onChange}
                            />
                        </div>
                        <input
                            type="submit"
                            className="btnSubmit"
                            value="Registrarse"
                            // disabled={validarCliente()}
                        />
                        <p className="message text-center">Leíste los términos?
                        <Link to={'/politica'} className="politica">Política y Privacidad</Link>
                        </p>
                        <p className="message text-center">Volver? 
                        <Link to={'/signin'} className="politica">Iniciar Sesión</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUpScreen;
