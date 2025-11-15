import './AboutMe.css'; 
import lightbulb from '../../assets/images/lightbulb.png';
import longlightbulb from '../../assets/images/longlightbulb.png';
import lightbulbdark from '../../assets/images/lightbulbdark.png';
function AboutMe() {
  return (
    <>
      <section className="brown-block">
        <img 
          src={lightbulbdark} 
          alt="decorative light bulb" 
          className="light-bulb1"
        />
        <img 
          src={lightbulbdark} 
          alt="decorative light bulb" 
          className="light-bulb2"
        />
        <img 
          src={longlightbulb} 
          alt="decorative light bulb" 
          className="light-bulb3"
        />
        <img 
          src={lightbulbdark} 
          alt="decorative light bulb" 
          className="light-bulb4"
        />
        <div className="top-layer">
        <div className="semi-circle">
          <h1 className="name">VICTORIA</h1>
        </div>
      </div>
      </section>
    
      <section id="about" className="about-me">

        <div className="photo-frame">Insert picture of me!</div>
      </section>
      
    </>
  );
}

export default AboutMe;