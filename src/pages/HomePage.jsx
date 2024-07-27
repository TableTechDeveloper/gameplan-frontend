// HomePage.jsx
import React, { useContext } from 'react';
import SignUpModal from '../modals/SignUpModal';
import { ModalContext } from '../pages/_TemplatePage';
import graphic from "../assets/graphic.svg"

const HomePage = () => {
    const { openModal } = useContext(ModalContext);

    const handleSignUpClick = () => {
        console.log("SignUp button clicked");
        openModal(<SignUpModal />);
    };
    
    return (
        <section className="HomePage">
            <h1>GamePlan Tagline!</h1>
            <p>GamePlan blurb about the app blurb about the app blurb about the app blurb about the app blurb about the app blurb about the app</p>
            <button className="button-primary" onClick={handleSignUpClick}>Signup</button>
            <img src={graphic} alt="placeholder" />

        </section>
    );
};

export default HomePage;