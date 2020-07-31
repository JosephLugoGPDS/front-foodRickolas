import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { APIContext } from '../../context/APIContext';

export const Navbar = (props) => {

    const [auth, guardarAuth] = useContext(APIContext);

    const signOff = () => {
        //auth.auth = false para remover el token
        guardarAuth({
            auth: false
        });
        //Limpiamos el localStorage con el id
        // localStorage.removeItem(_id);
        //redireccionamos
        props.history.push('/');
        console.log(auth.auth);

    }

    return (
        <div>
            <nav className="topnav fixed-mobile">
                <div className="container-nav">
                    <div className="claseTitular"
                        id="miTopnav">

                        <Link to={"/"}><img src="assets/img/logo.webp" alt="Menu Nav" /></Link>
                        
                            <Link to={"/productos"}>Menú</Link>
                            <Link to={"/pedidos"}>Pedidos</Link>
                            <Link to={"/cliente/:id"}>Cliente</Link>

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
        </div>
    )
}

export default withRouter(Navbar);