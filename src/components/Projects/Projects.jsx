/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json"
import {ProjectCard} from "./ProjectCard";

export const Projects = () => {
    return (
    <section className={styles.ProjSec} id="projects">
        <h2 className={styles.title}>Projets</h2>
        <div className={styles.projects}>
            {projects.map((project,id)=>{
                return <ProjectCard key={id} project={project} />
            })}
        </div>
    </section>
    );
};
