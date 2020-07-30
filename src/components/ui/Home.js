import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <section className="website wave-container">
                <img src="assets/img/food.webp" alt="uno" />
                <div className="container-texts-main">
                    <div className="container">
                        <h2 className="title left">Ahora en tu hogar</h2>
                        <p className="parrafo">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                            nobis eaque totam a alias doloremque, mollitia maiores ratione
                    reiciendis libero.</p>
                        {/* Call to action */}
                        <Link to={"/"} className="cta content-align-center">Ver más</Link>
                    </div>
                </div>
            </section>

            <section className="info">
                <div className="container">
                    <h2 className="title left">Nuestro Objetivo es:</h2>
                    <p className="parrafo">
                        Ofrecer la mejor atención a nuestros clientes de forma atenta y confiable.
                            <br></br>Darle importancia a cada uno de nuestros clientes pues de ellos depende nuestro éxito.
                            <br></br>Elaborar los platos llenos de sabores y sensaciones más placenteras para el paladar de nuestros clientes de la manera más sana teniendo en cuenta las reglas nutricionales.
                            <br></br>Crear programas de oferta donde podamos involucrar a nuestros clientes cautivos.
                            <br></br>Dar información sobre la situación, facilidades y precios del restaurante. Pedir información y recoger las peticiones y entrantes.
                            <br></br>Presentar información: ofrecer y sugerir diferentes platos al cliente teniendo en cuenta la reglas de nutrición.
                            <br></br>Dar los mejores precios y más adecuados para nuestros platos


                    </p>
                </div>
            </section>

            <section className="cards container">
                <h2 className="title">Nuestros Servicios</h2>
                <div className="content-cards">
                    <article className="card">
                        <img src="assets/img/1.webp" alt="1" />
                        <h3>Nuestros Antojitos</h3>
                        <p>Comidas rápidas y deliciosas elaboradas con un estricto control de calidad.</p>
                        <Link to={"/"} className="cta">Ver más</Link>
                    </article>
                    <article className="card">
                        <img src="assets/img/2.webp" alt="2" />
                        <h3>Platos a la carta</h3>
                        <p>Platos elaborados al instante y siguiendo un estricto protocolo de salubridad.</p>
                        <Link to={"/"} className="cta">Ver más</Link>
                    </article>
                    <article className="card">
                        <img src="assets/img/3.webp" alt="3" />
                        <h3>Rápido y seguro</h3>
                        <p>Transporte y protocolos que otorgan seguridad en cada uno de nuestros envíos a tu hogar.</p>
                        <Link to={"/"} className="cta">Ver más</Link>
                    </article>
                </div>
            </section>

            <section className="info-last">
                <div className="container last-section">
                    <div className="content-texts-main">
                        <h2 className="title left">Búscanos</h2>
                        <p className="parrafo">
                            Búscanos y conoce más sobre nostros seguimos un estricto protocolo de seguridad, salubridad e higiene para otorgar la mejor experiencia a nuestro cliente desde la elaboración de nuestros chef y colaboradores, hasta el envío a tu mesa!
                    </p>
                        <a href="#conocenos" className="cta">Ver más</a>
                    </div>
                    <img src="assets/img/search_engine.svg" alt="search" />
                </div>
            </section>
        </div>
    )
}
export default Home;