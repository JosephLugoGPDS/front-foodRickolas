import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { APIContext } from '../../context/APIContext'

export const NavbarPersonal = (props) => {

    const [auth, guardarAuth] = useContext(APIContext);

    const signOff = () => {
        //auth.auth = false para remover el token
        guardarAuth({
            token: '',
            auth: false
        });
        //Eliminamos tambien el token del localStorage
        // localStorage.setItem('token', '');
        //redireccionamos
        // props.history.push('/');
        // console.log(props)

    }

    return (
        <div>
            <nav className="topnav fixed-mobile">
                <div className="container-nav">
                    <div className="claseTitular"
                        id="miTopnav">

                        <Link to={"/"}><img src="assets/img/logo.webp" alt="Menu Nav" /></Link>

                        {/* <Link to={"/productos"}>Menú</Link> */}

                        {auth.auth ? (
                            <Link to={"/pedidos"}>Pedidos</Link>
                        ) : null}

                        {auth.auth ? (
                            <Link
                                to="/"
                                className="btn-signoff"
                                onClick={signOff}
                            >Cerrar Sesión</Link>
                        ) : null}

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

export default withRouter(NavbarPersonal);
