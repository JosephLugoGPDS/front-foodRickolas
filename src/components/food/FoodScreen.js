import React from 'react'
import { Footer } from '../ui/Footer'
import { Header } from '../ui/Header'
import { Home } from '../ui/Home'
import Modal from '../ui/Modal'
import "../ui/Modal.css"
import { Link } from 'react-router-dom'


export const FoodScreen = () => {
    const modalRef = React.useRef();

    // const openModal = ()=>{
    //     console.log('open modal');
    //     modalRef.current.openModal();
    // }
    return (
        <div>
            
            <Header />
            <Home />
            <Footer />
            <div className="app">
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                ref={modalRef}>
                    <div className="card-modal">
                        <h1 className="close-modal">
                            <button
                            className="container-close"
                            onClick={() => modalRef.current.close()}
                            >
                            <i className="fas fa-times"></i>
                            </button>
                        </h1>
                        <Link to={"/signin"}>
                        <img src="assets/img/modal1.jpg" alt="modal" />
                        </Link>
                                              
                    </div>
            </Modal>

        </div>
        </div>
    )
}
