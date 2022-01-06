//css
import './App.css';
//pages
import About from './sections/About.js';
import Links from './sections/Links.js';
import Projects from './sections/projects/Projects.js';
import HpButton from './sections/Button.js';
//particles
import Particles from 'react-tsparticles';
import { options, particlesInit, particlesLoaded } from './particleOptions.js';
//react
import { useRef } from 'react';

function App() {
  const phrases = ['I code things sometimes.', 'Professional time spender.', 'Projects built on coffee and 2AM thoughts.', 'Detailed instructions, dumb machine.'];

  const aboutRef = useRef(null);
  const projRef = useRef(null);

  return (
    <div className="App">
      <header id="App-header" className='section'>
        <h1 className='fader'>Hey, I'm Moez.</h1>
        <Links />
        <p className='fader'>{phrases[Math.floor(Math.random()*phrases.length)]}</p>
        <div id='tos'>
          <HpButton text='About Me' refunc={aboutRef} />
          <HpButton text='Projects' refunc={projRef} />
        </div>
      </header>

      <About innerRef={aboutRef} />

      <Projects innerRef={projRef} />

      <Particles  init={particlesInit} loaded={particlesLoaded} options={options} />
    </div>
  );
}

export default App;
