import React from 'react'
// import { Navbar } from './Navbar'
import NavbarInicio from './NavbarInicio'

export const Header = () => {
    return (
        <div>
            <header className="hero">
            <NavbarInicio />
            <div className="texts-hero">
                <h1 className="font-weight-bold"><span className="color">Bienvenido</span> a FoodRickolas</h1>
                <p>El mejor sitio para ti</p>
                <a href="#conocenos">Conócenos</a>
            </div>
            {/* wave-configuration-react */}
            <div className="wave-configuration-react">
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="wave-svg">
                    <path
                        d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    ></path>
                </svg>
            </div>
        </header>
        </div>
    )
}
