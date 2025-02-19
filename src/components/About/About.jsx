/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './About.module.css'
import about from '../../data/about.json'

export const About = () => {
    return <section className={styles.aboutSection} id='about'>
        
        <div className={styles.avatar}><img src="/media/about/avatar.png" alt="avatar" /></div>

        <div className={styles.presentation}>
                <div className= {styles.presentationTexts}>
                    <p>
                        Salut ! Je m’appelle Alexandra et je suis développeuse frontend junior. Avant tout, je suis passionnée par le design et de la création d’interfaces agréables. Mon approche est axée sur l’esthétique et l’expérience utilisateur ; j’aime privilégier la simplicité tout en ayant un impact visuel fort. Bien que je maîtrise un peu en React, c’est vraiment le côté design qui m’attire le plus et c’est pourquoi j’envisage de me former plus sérieusement dans l’UX/UI. <br/>
                        Ces dernières années je me suis énormément investie dans l’éducation de mon frère, une expérience enrichissante qui a forgé mon sens des responsabilités. J’ai eu l’occasion de travailler dans la vente, parfois bénévolement, ce qui m’a permis de développer mes compétences en communication. Je parle aussi Anglais, un plus non négligeable pour m’adapter à des projets internationaux. <br/>
                        Dans les mois à venir et sur mon temps libre, j’envisage de retravailler entièrement le projet d’équipe réalisé lors d’un Hackathon pour approfondir mes compétences informatiques avec NodeJS et MongoDB. J’ai aussi pour objectif de refaire mon pendu en version responsive avec un meilleur design et de m’essayer à l’exercice de création d’une API.<br/>
                        D’ici peu, je pars en stage d’entreprise où je vais réaliser un e-commerce de A à Z avec le CMS WordPress.
                    </p>
                </div>
        </div>
    
        <div className={styles.likeToDo}>
            <h3>Ce que j'aime faire</h3>
            <div className={styles.toDoList}>
                 {about.map((aboutItem, id) => {
                return (
                    <div key={id} className={styles.toDo}>
                        <div>
                            <img src={aboutItem.imgSrc} alt={aboutItem.title} />
                        </div>
                        <p>{aboutItem.title}</p>
                    </div>
                )
            })} 
            </div>
           

        </div>
    </section>;   
}

export default About