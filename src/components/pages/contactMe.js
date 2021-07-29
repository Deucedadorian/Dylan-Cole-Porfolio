import React from 'react';
import msgIcon from '../../assets/images/message.png';
import gitIcon from '../../assets/images/github.png';
import phoneIcon from '../../assets/images/telephone.png';
import twitIcon from '../../assets/images/twitter.png';
import YTIcon from '../../assets/images/youtube.png';
import linkedIcon from '../../assets/images/linkedin.png';

export default function ContactMe() {
    return (
        <div>
            <section id="contact-me" className="default-tag-structure">
                <h1>Contact Me</h1>
                <ul className="contact-icons-list">
                    <li>
                        <a href="mailto: logboarddjc@gmail.com"><img className="icons" src={msgIcon}
                            alt="Email icon" /></a>
                    </li>
                    <li>
                        <a href="https://github.com/Deucedadorian" target="_blank" rel="noreferrer"><img className="icons" src={gitIcon}
                            alt="Github icon" /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dylan-cole-ba615b108/" target="_blank" rel="noreferrer"><img className="icons"
                            src={linkedIcon} alt="Linkedin icon" /></a>
                    </li>
                    <li>
                        <a href="tel:5082964015"><img className="icons" src={phoneIcon} alt="Telephone icon" /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/DylanCo94937243" target="_blank" rel="noreferrer"><img className="icons"
                            src={twitIcon} alt="Twitter icon" /></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UC1vuU0pqDQNN4xzEB9ERzfQ" target="_blank" rel="noreferrer"><img className="icons"
                            src={YTIcon} alt="YouTube icon" /></a>
                    </li>
                </ul>
            </section>
        </div>
    )
}