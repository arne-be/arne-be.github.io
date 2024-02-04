import {useState, useEffect} from 'react'
import styles, { layout } from './style';
import './input.css'
import {NavBar, Arne, CV, Projects, ProjectCard, About, Photos, Button, Footer} from './components';

const App = () => {
  /* Height of navbar set */
  const navbarHeight = 97;

  
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div id="navbar" className={`fixed top-0 w-full bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

    <div className={`bg-primary ${styles.flexStart}`} style={{ paddingTop: navbarHeight }}>
      <div className={`${styles.boxWidth}`}>
        <Arne />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <CV />
        <Projects />
        <About/>
        <Photos />
        <Footer />
      </div>
    </div>

    </div>
  )
}

export default App