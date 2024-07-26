import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavMenu from '../components/NavMenu';
import TransitionWrapper from '../components/TransitionWrapper';

function Template() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    return(
        <div className="container">
            <Header isOpen={isOpen} toggleMenu={toggleMenu} />
            <NavMenu isOpen={isOpen} />
            <div className="main">
                <TransitionWrapper>
                    <Outlet />
                </TransitionWrapper>
            </div>
            <Footer/>
        </div>
    );

}

export default Template;