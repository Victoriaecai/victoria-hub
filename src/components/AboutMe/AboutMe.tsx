import './AboutMe.css'; 
import longlightbulb from '../../assets/images/longlightbulb.png';
import backdrop from '../../assets/images/backdropportfolio.png';
import name from '../../assets/images/nameportfolio.png';
import { motion } from 'framer-motion';
import { useState } from 'react';

function AboutMe() {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('victoria813006@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <section className="backdrop">
        <img
          src= {backdrop}
          alt="decorative backdrop"
          className="backdrop-water"/>
        <div className="top-layer">
        <motion.img 
          src={longlightbulb} 
          alt="decorative light bulb" 
          className="light-bulb1"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.img 
          src={longlightbulb} 
          alt="decorative light bulb" 
          className="light-bulb2"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.img 
          src={longlightbulb} 
          alt="decorative light bulb" 
          className="light-bulb3"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
        <motion.img 
          src={longlightbulb} 
          alt="decorative light bulb" 
          className="light-bulb4"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        />
        <div className="semi-circle">
          <img
          src= {name}
          alt="Victoria Cai"
          className="name"/>
        </div>
      </div>
      </section>
    
      <section id="about" className="about-me">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="about-me-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="about-me-text-container">
            <p className="about-me-text">
              Hello! I'm Victoria, a computer science student at the University of Toronto, graduating 2028. 
            </p>
            <p className="about-me-text">
              In my spare time, I am a digital artist, nail artist, big-time music enjoyer, and gym-goer.
              </p>
            <p className="about-me-text">
              Thank you for visiting my portfolio website. Enjoy your stay!
            </p>
          </div>
          <div className="social-buttons">
            <button onClick={() => setShowEmail(true)} className="social-btn email-btn">Email Me</button>
            <a href="https://linkedin.com/in/victoriacai-" target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn">LinkedIn</a>
            <a href="https://instagram.com/vera_phina" target="_blank" rel="noopener noreferrer" className="social-btn instagram-btn">Instagram</a>
            <a href="https://github.com/victoriaecai" target="_blank" rel="noopener noreferrer" className="social-btn github-btn">GitHub</a>
          </div>
        </motion.div>
      </section>
      
      {showEmail && (
        <motion.div 
          className="email-popup-overlay" 
          onClick={() => setShowEmail(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="email-popup" 
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Contact Me</h3>
            <p>Email: <strong>victoria813006@gmail.com</strong></p>
            <button onClick={copyEmail} className="copy-btn">{copied ? 'Copied!' : 'Copy Email'}</button>
            {copied && <p className="copied-message">Email copied to clipboard!</p>}
            <button onClick={() => setShowEmail(false)} className="close-btn">Close</button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default AboutMe;