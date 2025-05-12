import React from 'react'
import Layout from './components/Layout/Layout';
import styles from './App.module.css';
import './index.css';


function App() {

  return (
    <div className={styles.Wrapper}>
      <Layout className={styles.Content}>
        <h1>Welcome to my Portfolio</h1>
        <p>This is the Home page!</p>
      </Layout>
    </div>
  )
}

export default App
