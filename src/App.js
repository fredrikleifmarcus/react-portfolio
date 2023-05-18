import logo from './logo.svg';
import { useState } from "react";

import Header from './components/Header';
import Tasks from './components/Tasks';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import Projects from './components/Projects';

import { Links } from './components/Links';
import { Contact } from './components/Contact';

import './App.css';

function App() {
  const [projects, setProject] = useState([
    {
      id: 1,
      title: "Elk Studios Slot Games",
      description: "I was the lead frontend client developer on several online slot games for Elk Studios including Pirots, Cygnus 2 and Freeway 7",
    },
    {
      id: 2,
      title: "Snorgi",
      description: "I developed an entertaining and lighthearted app using Android Studio and Firebase",
    },
  ])

  return (
    <main>
      <Navbar/>
      <About/>
      <Header title="Projects"/>
      <Projects projects={projects}/>
      <Links/>
      <Contact/>

    </main>


  );
}

export default App;
