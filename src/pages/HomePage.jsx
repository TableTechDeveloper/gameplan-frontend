// GomePage.jsx
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ModalContext } from '../pages/_TemplatePage';
import graphic from "../assets/graphic.svg"

const HomePage = () => {
    const { openModal } = useContext(ModalContext);

    const handleSignUpClick = () => {
        openModal(<div>Your Sign Up Modal Content</div>);
    };
    
    return (
        <section className="HomePage">
            <h1>GamePlan Tagline!</h1>
            <p>GamePlan blurb about the app blurb about the app blurb about the app blurb about the app blurb about the app blurb about the app</p>
            <button onClick={handleSignUpClick}>Sign Up</button>
            <img src={graphic} alt="placeholder" />
            <NavLink to="/dashboard">
            <button>Go to Dashboard</button>
            </NavLink>
        </section>
    );
};

export default HomePage;