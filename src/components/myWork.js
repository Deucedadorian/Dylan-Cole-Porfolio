import React from 'react';
// import '../assets/images/';
import '../assets/css/reset.css';
import '../assets/css/style.css';

export default function MyWork(props) {
    return (
        <div style={props.style}>
            <section id="my-work" class="default-tag-structure">
                <h1>My Work</h1>
                <a href="https://unh-bootcamp-projects.github.io/project-1-group-a/" target="_blank" rel="noreferrer">
                    <img class="project-images" src="..\assets\images\unh-bootcamp-projects.github.io_project-1-group-a_.png"
                        alt="Reciflixor site." /></a>
                <section class="project-card">
                    <h2 class="project-title">Reciflixor</h2>
                    <a href="https://github.com/UNH-Bootcamp-Projects/project-1-group-a" target="_blank" rel="noreferrer">
                        <h3>Github</h3>
                    </a>
                </section>
                <a href="https://mysterious-lowlands-86271.herokuapp.com/login" target="_blank" rel="noreferrer"><img class="project-images"
                    src=".\assets\images\mysterious-lowlands-86271.herokuapp.com_login.png" alt="the login page of my blog site." />
                </a>
                <section class="project-card">
                    <h2 class="project-title">CMS-style blog site</h2>
                    <a href="https://github.com/Deucedadorian/14-Model-View-Controller-MVC-Tech-Blog" target="_blank" rel="noreferrer">
                        <h3>Github</h3>
                    </a>
                </section>
                <a href="https://deucedadorian.github.io/06-Server-Side-APIs-Weather-Dashboard/" target="_blank" rel="noreferrer"><img
                    class="project-images"
                    src=".\assets\images\deucedadorian.github.io_06-Server-Side-APIs-Weather-Dashboard_.png"
                    alt="my weather dashboard app." /></a>
                <section class="project-card">
                    <h2 class="project-title">Weather Dashboard</h2>
                    <a href="https://github.com/Deucedadorian/06-Server-Side-APIs-Weather-Dashboard" target="_blank" rel="noreferrer">
                        <h3>Github</h3>
                    </a>
                </section>
                <a href="https://deucedadorian.github.io/05-Third-Party-APIs-Work-Day-Scheduler/" target="_blank" rel="noreferrer">
                    <img class="project-images"
                        src=".\assets\images\deucedadorian.github.io_05-Third-Party-APIs-Work-Day-Scheduler_.png"
                        alt="Work-day scheduler application." />
                </a>
                <section class="project-card">
                    <h2 class="project-title">Work Day scheduler</h2>
                    <a href="https://github.com/Deucedadorian/05-Third-Party-APIs-Work-Day-Scheduler" target="_blank" rel="noreferrer">
                        <h3>Github</h3>
                    </a>
                </section>
                <a href="https://sheltered-cliffs-13242.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img class="project-images note-taker"
                        src=".\assets\images\sheltered-cliffs-13242.herokuapp.com_.png"
                        alt="Note taker application screenshot." />
                </a>
                <section class="project-card">
                    <h2 class="project-title">Code Quiz</h2>
                    <a href="https://github.com/Deucedadorian/11-Express.js-Note-Taker" target="_blank" rel="noreferrer">
                        <h3>Github</h3>
                    </a>
                </section>
            </section>
        </div>
    )
}