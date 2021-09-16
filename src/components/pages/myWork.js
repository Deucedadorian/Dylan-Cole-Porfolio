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
        description: `SWOOSAT is a full-stack application designed to
        track recurring online subscription spending using analytics to 
        track those expenses.`,
        technologies: [
            'Handlebars.js',
            'Node.js',
            'Express.js',
            'MySQL Database',
            'Chart.js'
        ],
        key: 1,
    },
    {
        deploy: 'https://unh-bootcamp-projects.github.io/project-1-group-a/',
        image: reciflixor,
        name: 'Reciflixor',
        github: 'https://github.com/UNH-Bootcamp-Projects/project-1-group-a',
        description: `Reciflixor is an application where movie lovers can select
        a movie and enjoy a recipe from that movie to experience the world the directors created.
        Reciflixor is a movie immersion experience!`,
        technologies: [
            'Foundations CSS Framework',
            'JavaScript',
            'The Movie Database API',
            'YouTube API'
        ],
        key: 2,

    },
    {
        deploy: 'https://mysterious-lowlands-86271.herokuapp.com/login',
        image: blogSite,
        name: 'CMS-style blog site',
        github: 'https://github.com/Deucedadorian/14-Model-View-Controller-MVC-Tech-Blog',
        description: `A CMS-style blog site similar to a Wordpress site,
        where developers can publish their blog posts and comment on other developers’ posts as well.
        It follows the MVC paradigm in its architectural structure.`,
        technologies: [
            'Handlebars.js',
            'Sequelize',
            'express-session',
            'JavaScript'
        ],
        key: 3,
    },
    {
        deploy: 'https://deucedadorian.github.io/06-Server-Side-APIs-Weather-Dashboard/',
        image: weatherApp,
        name: 'Weather Dashboard',
        github: 'https://github.com/Deucedadorian/06-Server-Side-APIs-Weather-Dashboard',
        description: `This app allows you to search for current and future weather conditions by city name.
        Once a city has been searched, the city is saved to local storage and I button is appended to the search section.`,
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
            'Day.js',
            'zepto.js'
        ],
        key: 4,
    },
    {
        deploy: 'https://deucedadorian.github.io/05-Third-Party-APIs-Work-Day-Scheduler/',
        image: scheduler,
        name: 'Work Day scheduler',
        github: 'https://github.com/Deucedadorian/05-Third-Party-APIs-Work-Day-Scheduler',
        description: `This application uses jquery, bootstrap, and moment.js to allow you to plan 
        out your work day.You can write out your schedule for each hour and the app will help you 
        keep track of time by coloring each hour with colors for past, present, and future.`,
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
            'jQuery',
            'moment.js',
        ],
        key: 5,
    },
    {
        deploy: 'https://sheltered-cliffs-13242.herokuapp.com/',
        image: NoteTaker,
        name: 'Code Quiz',
        github: 'https://github.com/Deucedadorian/11-Express.js-Note-Taker',
        description: `This application is used to write and save notes. It uses 
        an Express.js back end and saves and retrieves note data from a JSON file.`,
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'express',
        ],
        key: 6,
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
            github={project.github}
            description={project.description}
            tech={project.technologies}
            key={project.key} />
            ))}
        </div>
    );
}