import './AboutMe.css'; 
function AboutMe() {
  return (
    <>
      <section className="brown-block">
        <div className="light-bulb">
            <div className="cord"></div>
            <div className="cord-shadow"></div>
          <div className="bulb"></div>
        </div>
        <div className="top-layer">
        <div className="semi-circle">
          <h1 className="title">VICTORIA CAI</h1>
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