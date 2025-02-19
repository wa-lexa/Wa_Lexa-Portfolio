 // eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";


export const Experience = () => {
    return <section className={styles.expSection} id='experience'> 
        
        <h2>Experience</h2>

        <div className={styles.exps}>

            <div className={styles.herstory}>
                <h3>Éxpériences professionnelles</h3>
                <ul className={styles.history}>
                    {history.map((historyItem, id)=> {
                        return(
                            <li key={id} className={styles.historyItem}>
                                <img src={historyItem.imgSrc} alt={`${historyItem.employer} Logo`} />
                                <div className={styles.historyItemDetails}>
                                    <h4>{`${historyItem.role}, ${historyItem.employer}`}</h4>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.missions.map((mission, id)=> {
                                            return <li key={id}>{mission}</li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className={styles.programming}>
                    <h3>Compétences informatiques</h3>
                <div className={styles.programmingSkills}>
                    {skills.map((skill , id)=>{
                        console.log(skill);
                        
                     return (
                            <div key={id} className={styles.programmingSkill}>
                                <div> 
                                    <img src={skill.imgSrc} alt={skill.title}/> 
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        )
                    })}
                </div>        
            </div>
            
        </div>
    </section>
}

