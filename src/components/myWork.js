import React from 'react';
import '../assets/css/reset.css';
import '../assets/css/style.css';
import reciflixor from '../assets/images/unh-bootcamp-projects.github.io_project-1-group-a_.png';
import blogSite from '../assets/images/mysterious-lowlands-86271.herokuapp.com_login.png';
import weatherApp from '../assets/images/deucedadorian.github.io_06-Server-Side-APIs-Weather-Dashboard_.png';
import scheduler from '../assets/images/deucedadorian.github.io_05-Third-Party-APIs-Work-Day-Scheduler_.png';
import NoteTaker from '../assets/images/sheltered-cliffs-13242.herokuapp.com_.png';
import swosaat from '../assets/images/swosaat.png';

export default function MyWork() {
    return (
        <div>
            <section id="my-work" className="default-tag-structure">
                <h1>My Work</h1>
                <a href="https://evening-fortress-06751.herokuapp.com/" target="_blank" rel="noreferrer">
                <img className="project-images" src={swosaat}
                alt="SWOSAAT header" /></a>
                <section className="project-card">
                    <h2 className="project-title">SWOSAAT</h2>
                    <a href="https://github.com/Deucedadorian/Subscription-Tracker" target="_blank" rel="noreferrer">
                        <h3>Github</h3>
                    </a>
                </section>
                <a href="https://unh-bootcamp-projects.github.io/project-1-group-a/" target="_blank" rel="noreferrer">
                    <img className="project-images" src={reciflixor}
                        alt="Reciflixor site." /></a>
                <section className="project-card">
                    <h2 className="project-title">Reciflixor</h2>
                    <a href="https://github.com/UNH-Bootcamp-Projects/project-1-group-a" target="_blank" rel="noreferrer">
                        <h3>Github</h3>
                    </a>
                </section>
                <a href="https://mysterious-lowlands-86271.herokuapp.com/login" target="_blank" rel="noreferrer"><img className="project-images"
                    src={blogSite} 
                    alt="the login page of my blog site." />
                </a>
                <section className="project-card">
                    <h2 className="project-title">CMS-style blog site</h2>
                    <a href="https://github.com/Deucedadorian/14-Model-View-Controller-MVC-Tech-Blog" target="_blank" rel="noreferrer">
                        <h3>Github</h3>
                    </a>
                </section>
                <a href="https://deucedadorian.github.io/06-Server-Side-APIs-Weather-Dashboard/" target="_blank" rel="noreferrer"><img
                    className="project-images"
                    src={weatherApp}
                    alt="my weather dashboard app." /></a>
                <section className="project-card">
                    <h2 className="project-title">Weather Dashboard</h2>
                    <a href="https://github.com/Deucedadorian/06-Server-Side-APIs-Weather-Dashboard" target="_blank" rel="noreferrer">
                        <h3>Github</h3>
                    </a>
                </section>
                <a href="https://deucedadorian.github.io/05-Third-Party-APIs-Work-Day-Scheduler/" target="_blank" rel="noreferrer">
                    <img className="project-images"
                        src={scheduler}
                        alt="Work-day scheduler application." />
                </a>
                <section className="project-card">
                    <h2 className="project-title">Work Day scheduler</h2>
                    <a href="https://github.com/Deucedadorian/05-Third-Party-APIs-Work-Day-Scheduler" target="_blank" rel="noreferrer">
                        <h3>Github</h3>
                    </a>
                </section>
                <a href="https://sheltered-cliffs-13242.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img className="project-images note-taker"
                        src={NoteTaker}
                        alt="Note taker application screenshot." />
                </a>
                <section className="project-card">
                    <h2 className="project-title">Code Quiz</h2>
                    <a href="https://github.com/Deucedadorian/11-Express.js-Note-Taker" target="_blank" rel="noreferrer">
                        <h3>Github</h3>
                    </a>
                </section>
            </section>
        </div>
    )
}