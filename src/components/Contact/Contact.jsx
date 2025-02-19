
import { useState } from "react";
import styles from "./Contact.module.css"; 

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (error) setError(""); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.message.length < 30) {
      setError("Le message doit contenir au moins 30 caractères.");
      return;
    }

    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Nouveau message de ${name}`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:wa-lexa@hotmail.com?subject=${subject}&body=${body}`;

    setIsSent(true); 

    setFormData({ name: "", email: "", message: "" }); 

    setTimeout(() => setIsSent(false), 5000); 
  };

  return(
    <section className={styles.cntSec} id="contact">
        
        <div className={styles.contact}>
            <div className={styles.socials}>
                <h3>Mes réseaux</h3>
                <ul className={styles.links}>
                  <li className={styles.link}>
                    <img src="/media/social/github.png" alt="github"/>
                    <a href="https://github.com/wa-lexa">Mon GitHub</a>
                  </li>
                  <li className={styles.link}>
                    <img src="/media/social/linkedin.png" alt="linkedin"/>
                    <a href="https://www.linkedin.com/in/alexandra-wathelet/">Mon LinkedIn</a>
                  </li>
                </ul>
            </div>
<h2>Contactez-moi</h2>
            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" required className={styles.input}/>
                <input type="email" name="email" value={formData.email} onChange={handleChange}  placeholder="Votre email" required className={styles.input}/>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Votre message" required className={styles.textarea}/>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.button}>Envoyer</button>
              </form>
              {isSent && <p className={styles.success}>Votre message a bien été envoyé !</p>}
            </div>
        </div>
    </section>
  );
};
