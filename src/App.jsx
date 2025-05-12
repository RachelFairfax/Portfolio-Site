import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import styles from './App.module.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import './index.css';

function App() {

  return (
    <BrowserRouter>
      <div className={styles.Wrapper}>
        <Layout className={styles.Content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />}/>
              <Route path="/certifications" element={<Certifications />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  )
}

export default App
