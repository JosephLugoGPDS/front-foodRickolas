import React from 'react'

export const FooterUsuario = () => {
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
                <div className="col-lg-10">
                    <p className="title">Contáctanos</p>
                    
                    <p>
                    <i className='bx bxs-phone-call' ></i>
                    01 – 2829392
                    </p>
                    <p>
                    <i className='bx bx-mail-send' ></i>
                    soportegpds@gmail.com
                    </p>
                </div>
                    <div className="col-lg-3">
                    <h1>
                    <i className='bx bxl-nodejs' ></i>
                    <i className='bx bxs-data' ></i>
                    <i className='bx bxl-javascript' ></i>
                    <i className='bx bxl-react' ></i>
                    </h1>
                    </div>


            </div>
        </footer>
    </div>
    )
}
