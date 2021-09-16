import React from 'react';

export default function Card(props) {
    return (
        <div className="project-card">
            <a className="image-container" href={props.deploy} target="_blank" rel="noreferrer">
                <img className="project-images" src={props.image} alt="App Banner" />
            </a>
            <section className="project-info">
                <div className="title-section">
                    <h2 className="project-title">{props.name}</h2>
                    <a href={props.github} target="_blank" rel="noreferrer">
                        <h3>Github</h3>
                    </a>
                </div>
                <p>{props.description}</p>
            </section>
        </div>
      );
    }