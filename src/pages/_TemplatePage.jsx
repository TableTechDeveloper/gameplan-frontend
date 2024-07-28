// _TemplatePage.jsx
import React, { useState, createContext } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from '../components/Header';
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';
import NavMenu from '../components/NavMenu';
import TransitionWrapper from '../components/TransitionWrapper';
import Modal from '../modals/Modal';


// Context to manage the modal state
export const ModalContext = createContext();

function Template() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };


    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            <div className="container">
                {isHomePage ? (
                    <HomeHeader />
                ) : (
                    <Header isOpen={isMenuOpen} toggleMenu={toggleMenu} />
                )}
                <NavMenu isOpen={isMenuOpen} />
                <div className="main">
                    <TransitionWrapper>
                        <Outlet />
                    </TransitionWrapper>
                </div>
                <Footer/>
                {isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
            </div>
        </ModalContext.Provider>
    );
}

export default Template;
