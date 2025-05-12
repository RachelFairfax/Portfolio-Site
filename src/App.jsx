import React from 'react'
import Layout from './components/Layout/Layout';
import styles from './App.module.css';
import './index.css';


function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Layout style={{flex: 1}}>
        <h1>Welcome to my Portfolio</h1>
        <p>This is the Home page!</p>
      </Layout>
    </div>
  )
}

export default App
