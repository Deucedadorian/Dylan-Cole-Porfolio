import React from 'react';
import reciflixor from '../../assets/images/unh-bootcamp-projects.github.io_project-1-group-a_.png';
import blogSite from '../../assets/images/mysterious-lowlands-86271.herokuapp.com_login.png';
import weatherApp from '../../assets/images/deucedadorian.github.io_06-Server-Side-APIs-Weather-Dashboard_.png';
import scheduler from '../../assets/images/deucedadorian.github.io_05-Third-Party-APIs-Work-Day-Scheduler_.png';
import NoteTaker from '../../assets/images/sheltered-cliffs-13242.herokuapp.com_.png';
import swosaat from '../../assets/images/swosaat.png';
import Project from './project.js';

const projects = [
    {
        deploy: 'https://evening-fortress-06751.herokuapp.com/',
        image: swosaat,
        name: 'SWOSAAT',
        github: 'https://github.com/Deucedadorian/Subscription-Tracker',
    },
    {
        deploy: 'https://unh-bootcamp-projects.github.io/project-1-group-a/',
        image: reciflixor,
        name: 'Reciflixor',
        github: 'https://github.com/UNH-Bootcamp-Projects/project-1-group-a',
    },
    {
        deploy: 'https://mysterious-lowlands-86271.herokuapp.com/login',
        image: blogSite,
        name: 'CMS-style blog site',
        github: 'https://github.com/Deucedadorian/14-Model-View-Controller-MVC-Tech-Blog',
    },
    {
        deploy: 'https://deucedadorian.github.io/06-Server-Side-APIs-Weather-Dashboard/',
        image: weatherApp,
        name: 'Weather Dashboard',
        github: 'https://github.com/Deucedadorian/06-Server-Side-APIs-Weather-Dashboard',
    },
    {
        deploy: 'https://deucedadorian.github.io/05-Third-Party-APIs-Work-Day-Scheduler/',
        image: scheduler,
        name: 'Work Day scheduler',
        github: 'https://github.com/Deucedadorian/05-Third-Party-APIs-Work-Day-Scheduler',
    },
    {
        deploy: 'https://sheltered-cliffs-13242.herokuapp.com/',
        image: NoteTaker,
        name: 'Code Quiz',
        github: 'https://github.com/Deucedadorian/11-Express.js-Note-Taker',
    },
];

export default function MyWork() {
    return (
        <div className='default-tag-structure'>
            {projects.map((project) => (
            <Project 
            deploy={project.deploy}
            image={project.image}
            name={project.name} 
            github={project.github} />
            ))}
        </div>
    );
}