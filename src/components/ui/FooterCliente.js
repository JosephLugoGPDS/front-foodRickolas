import React from 'react'
import { Link } from 'react-router-dom'

export const FooterCliente = () => {
    return (
        <div>
            <div className="svg-wave">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path
                        d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z">
                    </path>
                </svg>
            </div>
            <footer className="footer" id="conocenos">
                <div className="container row">
                    <div className="col-lg-8">
                        <p className="title">Contáctanos</p>
                        
                        <p>
                        <i className='bx bxs-phone-call' ></i>
                        054 – 614792
                        </p>
                        <p>
                        <i className='bx bx-mail-send' ></i>
                        foodrickolas@gmail.com
                        </p>
                    </div>
                        <div className="col-lg-4">
                        <h1>
                        <i className='bx bxl-twitter'></i>
                        <i className='bx bxl-facebook'></i>
                        <i className='bx bxl-instagram' ></i>
                        <i className='bx bxl-youtube' ></i>
                        </h1>
                        <Link
                        to="/politicadelivery">
                        Política de Delivery
                        </Link>
                        </div>


                </div>
            </footer>
        </div>
    )
}
