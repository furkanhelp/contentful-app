import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Mlkshk artisan blackbird spyplane semiotics chia intelligentsia
            raclette ascot chicharrones ethical. Knausgaard biodiesel sus af
            ennui. Church-key four loko cliche chillwave, locavore neutra DSA.
            Banh mi cardigan cold-pressed skateboard live-edge pork belly
            gastropub green juice lo-fi slow-carb everyday carry fanny pack
            pickled raw denim.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
