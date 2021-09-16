import React from 'react';

export default function Card(props) {
    return (
        <div className="project-card">
            <a className="image-container" href={props.deploy} target="_blank" rel="noreferrer">
                <img className="project-images" src={props.image} alt="App Banner" />
                {/* TODO: fix overlay to show on hover */}
                <div className="overlay">
                    <p>Technologies</p>
                    <ul>
                        <li>test</li>
                        <li>test2</li>
                        <li>test3</li>
                    </ul>
                </div>
            </a>
            <section className="project-info">
                <h2 className="project-title">{props.name}</h2>
                <a href={props.github} target="_blank" rel="noreferrer">
                    <h3>Github</h3>
                </a>
                <p>{props.description}</p>
            </section>
        </div>
      );
    }