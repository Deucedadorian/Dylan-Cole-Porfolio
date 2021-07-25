import React from 'react';
import '../assets/css/reset.css';
import '../assets/css/style.css';
import headshot from '../assets/images/headshotVignetteMonoGrayCrop.png';

export default function Jumbotron() {
    return (
        <div>
            <div className="jumbotron">
                <div>
                    <img class="headShot" src={headshot} alt="A headshot of the author." />
                </div>
                <h1>Dylan Cole</h1>
                <p>
                    Developer in training with a passion for harnessing the power of
                    computers to innovative.
                </p>
                <ul class="link-list">
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
                        <a href="https://docs.google.com/document/d/1HNUvJOzRDGbkjmNP8y02M4hxLyvsDtuzwOqbJx6Qt90/edit?usp=sharing"
                            target="_blank" rel="noreferrer">My Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}