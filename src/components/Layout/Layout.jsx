import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Layout({ children }){
    return (
        <>
            <Navbar />
            <main style={{flex:1}}> {children} </main>
            <Footer />
        </>
    )
}
// Children passed in as props to display the page data between the header and footer

export default Layout;