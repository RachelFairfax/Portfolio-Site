import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

function Layout({ children }){
    return (
        <>
            <Navbar />
            <main className={styles.Main}> {children} </main>
            <Footer />
        </>
    )
}
// Children passed in as props to display the page data between the header and footer

export default Layout;