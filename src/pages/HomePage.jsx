// HomePage.jsx
import React, { useContext } from 'react';
import SignUpModal from '../modals/SignUpModal';
import { ModalContext } from '../pages/_TemplatePage';

import bluepiece from "../assets/bluepiece.svg";
import redpiece from "../assets/redpiece.svg";
import dice from "../assets/dice.svg";

const HomePage = () => {
    const { openModal } = useContext(ModalContext);

    const handleSignUpClick = () => {
        console.log("SignUp button clicked");
        openModal(<SignUpModal />);
    };

    
    return (
        <section className="home-page">
            <div className="gameplan-graphic">
                <img src={dice} alt="placeholder" className="img-dice"/>
                <h1>GAMEPLAN</h1>
                <div className="pieces">
                    <img src={bluepiece} alt="placeholder" className="img-bluepiece"/>
                    <img src={redpiece} alt="placeholder" className="img-redpiece"/>
                </div>
                <h2>The Ultimate Game Night Planning App</h2>
                {/* <p>GamePlan is your go-to platform for planning and managing unforgettable board game nights with friends and fellow enthusiasts. Whether you're discovering new games, organizing events, or keeping track of your favorite game collections, GamePlan has everything you need to make your next game night a success. Join today and start planning your next adventure!</p> */}
                <button className="button-primary" id="button-homepage" onClick={handleSignUpClick}>Signup!</button>
                
            </div>
        </section>
    );
};

export default HomePage;