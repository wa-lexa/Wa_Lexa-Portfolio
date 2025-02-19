/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({project}) => {
    const { title, imgSrc, description, skills, demo, source } = project;
    return (
        <div className={styles.projectCard}>
            <img src={imgSrc} alt={`Image de ${project.title}`} className={styles.image}/>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill,id)=> {
                    return (
                        <li key={id} className={styles.skill}>{skill}</li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo</a>
                <a href={source} className={styles.link}>Source</a>
            </div>
        </div>
    ); 

};