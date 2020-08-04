import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { APIContext } from '../../context/APIContext'

export const Navbar = (props) => {

    const [auth, guardarAuth] = useContext(APIContext);

    const signOff = () => {
        //auth.auth = false para remover el token
        guardarAuth({
            token: '',
            auth: false
        });
        //Eliminamos tambien el token del localStorage
        localStorage.setItem('token', '');
        //redireccionamos
        props.history.push('/');

    }

    if(!auth.auth) 
    return (
        <nav className="topnav fixed-mobile">
                <div className="container-nav">
                    <div className="claseTitular"
                        id="miTopnav">
                        <Link to={"/"}><img src="assets/img/logo.webp" alt="Menu Nav" /></Link>

                        <Link to={"/productos"}>Menú</Link>

                    </div>
                </div>
            </nav>
    )
                       

    return (
    
            <nav className="topnav fixed-mobile">
                <div className="container-nav">
                    <div className="claseTitular"
                        id="miTopnav">

                        <Link to={"/"}><img src="assets/img/logo.webp" alt="Menu Nav" /></Link>
                        
                        <Link to={"/clientes"}>Clientes</Link>
                        
                        <Link to={"/pedidos"}>Pedidos</Link>

                        <Link to={"/productos"}>Menú</Link>
                        
                            <button
                                className="btn-signoff"
                                onClick={signOff}
                            >Cerrar Sesión</button>
                        

                        <Link to={"/"}
                            className="icon"
                        >
                            <i className='bx bx-menu-alt-right'></i>
                        </Link>

                    </div>
                </div>
            </nav>
        
    )
}

export default withRouter(Navbar);
