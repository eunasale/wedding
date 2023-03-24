import React, { useEffect } from 'react';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Place from './components/Place';
import Family from './components/Family';
import Account from './components/Account';
import Footer from './components/Footer';

import './App.css';

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <Home />
            <Family />
            <Timeline />
            <Gallery />
            <Account />
            <Place />
            <Footer />
        </div>
    );
}

export default App;
