import React from 'react';

export default function Card(props) {
    return (
        <div>
            <a href={props.deploy} target="_blank" rel="noreferrer">
            <img className="project-images" src={props.image}
            alt="SWOSAAT header" /></a>
            <section className="project-card">
                <h2 className="project-title">{props.name}</h2>
                <a href={props.github} target="_blank" rel="noreferrer">
                    <h3>Github</h3>
                </a>
            </section>
        </div>
      );
    }