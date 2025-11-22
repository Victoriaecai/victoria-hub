import './AboutMe.css'; 
import longlightbulb from '../../assets/images/longlightbulb.png';
import backdrop from '../../assets/images/backdropportfolio.png';
import name from '../../assets/images/nameportfolio.png';
function AboutMe() {
  return (
    <>
      <section className="backdrop">
        <img
          src= {backdrop}
          alt="decorative backdrop"
          className="backdrop-water"/>
        <img 
          src={longlightbulb} 
          alt="decorative light bulb" 
          className="light-bulb1"
        />
        <img 
          src={longlightbulb} 
          alt="decorative light bulb" 
          className="light-bulb2"
        />
        <img 
          src={longlightbulb} 
          alt="decorative light bulb" 
          className="light-bulb3"
        />
        <img 
          src={longlightbulb} 
          alt="decorative light bulb" 
          className="light-bulb4"
        />
        <div className="top-layer">
        <div className="semi-circle">
          <img
          src= {name}
          alt="Victoria Cai"
          className="name"/>
        </div>
      </div>
      </section>
    
      <section id="about" className="about-me">
        <h2>About Me</h2>
        <div className="about-me-content">
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
        </div>
      </section>
      
    </>
  );
}

export default AboutMe;