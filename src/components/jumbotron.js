import React from 'react';
import '../assets/css/reset.css';
import '../assets/css/style.css';
import headshot from '../assets/images/headshotVignetteMonoGrayCrop.png';

export default function Jumbotron() {
    return (
        <div>
            <div className="default-tag-structure">
                <div>
                    <img className="headShot" src={headshot} alt="A headshot of the author." />
                </div>
                <h1>Dylan Cole</h1>
                <p>
                    Developer in training with a passion for harnessing the power of
                    computers to innovative.
                </p>
                <ul className="link-list">
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#my-work">My Work</a>
                    </li>
                    <li>
                        <a href="#contact-me">Contact Me</a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/document/d/1OIVoojwJsLW0Y977_YJDl1uth4zm0cpItfo19QxTWNI/edit?usp=sharing"
                            target="_blank" rel="noreferrer">My Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}