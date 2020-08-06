import React from 'react';
import './ui.css';

export const Footer = () => {
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
                <div className="container">
                    <h2 className="title">¿Quiénes Somos?</h2>
                    <p>
                        Somos una empresa familiar fundada el 31 de julio de 2016, con alto conocimiento en la producción y venta de comidas rápidas, la experiencia adquirida a través de los años, nos da el conocimiento para valorar la importancia del cliente, quien es el motivo de nuestros esfuerzos, y así llegar a ustedes con la seguridad de poder ofrecerles nuestros productos de excelente calidad con responsabilidad y cumplimiento. Contamos con excelente calidad humana que les brindara la atención apropiada, para de esta manera poder llegar a saber y entender sus gustos y necesidades. El hecho de contar con ustedes como nuestros clientes es motivo de satisfacción.
                        </p>
                        <h1>
                        <i className='bx bxl-twitter'></i>
                        <i className='bx bxl-facebook'></i>
                        <i className='bx bxl-instagram' ></i>
                        <i className='bx bxl-youtube' ></i>
                        </h1>


                </div>
            </footer>
        </div>
    )
}
