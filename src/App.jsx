import React from 'react'
import Layout from './components/Layout/Layout';
import styles from './App.module.css';
import './index.css';


function App() {

  return (
    <div ClassName={styles.wrapper}>
      <Layout className={styles.content}>
        <h1>Welcome to my Portfolio</h1>
        <p>This is the Home page!</p>
      </Layout>
    </div>
  )
}

export default App
