import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarInicio = () => {

    return (
    
            <nav className="topnav fixed-mobile">
                <div className="container-nav">
                    <div className="claseTitular"
                        id="miTopnav">

                        <Link to={"/"}><img src="assets/img/logo.webp" alt="Menu Nav" /></Link>

                        <Link 
                        className="inicio"
                        to={"/signin"}>Ingresar al Menú</Link>
                        

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

export default NavbarInicio;
