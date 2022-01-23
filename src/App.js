import './App.scss';
import Reveal from "react-awesome-reveal";
import { fadeFromLeft, fadeFromRight } from './helpers/animations';
import maximus from './assets/maximus.jpeg';
import softUI from './assets/soft-ui.gif';
import lighthouse from './assets/lighthouse.jpeg';
import traderu from './assets/traderu.gif';

function App() {
  return (
    <div>
      <div className="unit unit--first">
        <Reveal keyframes={fadeFromLeft}>
          <h1>
            Hi 👋
          </h1>
        </Reveal>
        <Reveal keyframes={fadeFromLeft} delay={1000}>
          <h2>
            I'm Bryce
          </h2>
        </Reveal>
        <Reveal keyframes={fadeFromLeft} delay={2000}>
          <h3>
            A software developer from Victoria, BC
          </h3>
        </Reveal>
      </div>
      <div className="unit unit-maximus">
        <Reveal keyframes={fadeFromRight}>
          <div className="image-grouping">
            <h2>
              Currently I'm working at Maximus Canada
            </h2>
            <img src={maximus} alt="Maximus Canada"></img>
          </div>
        </Reveal>
        <Reveal keyframes={fadeFromRight} delay={500}>
          <h3>
            Working as an Application Developer, I build and maintain VueJS and Angular 2+ apps with NodeJS microservices
          </h3>
        </Reveal>
      </div>
      <div className="unit">
        <Reveal keyframes={fadeFromLeft}>
          <div className="image-grouping">
            <h2>
              In my off-time I'm busy working on a React component library for neumorphic design called react-soft-ui 
            </h2>
            <img src={softUI} alt="Soft UI"></img>
          </div>
        </Reveal>
        <Reveal keyframes={fadeFromLeft} delay={500}>
          <h3>
            ...provided no one takes that npm module name by the time I get around to releasing it
          </h3>
        </Reveal>
      </div>
      <div className="unit">
        <Reveal keyframes={fadeFromRight}>
          <div className="image-grouping">
            <h2>
              Before working at Maximus I graduated from Lighthouse Labs
            </h2>
            <img src={lighthouse} alt="Lighthouse Labs"></img>
          </div>
        </Reveal>
        <Reveal keyframes={fadeFromRight} delay={500}>
          <h3>
            A great program with comprehensive content on Javascript, React, Ruby on Rails, and more
          </h3>
        </Reveal>
      </div>
      <div className="unit unit--traderu">
        <Reveal keyframes={fadeFromLeft}>
          <h2>
            If you'd like to see a previous project of mine, take a look at <a href="https://github.com/bryce-mcmath/traderu">TraderU</a>
          </h2>
        </Reveal>
        <Reveal keyframes={fadeFromLeft} delay={500}>
          <img src={traderu} alt="TraderU"></img>
        </Reveal>
      </div>
      <div className="unit">
        <Reveal keyframes={fadeFromRight}>
          <h2>
            If you're looking to get ahold of me or get a copy of my resume, send an email to <a href="mailto:bryce.mcmath.work@gmail.com">bryce.mcmath.work@gmail.com</a>
          </h2>
          <h4>If you'd just like to see my face, pop open the console.</h4>
        </Reveal>
      </div>
    </div>
  );
}

export default App;
