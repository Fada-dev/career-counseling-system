import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PhotoBook from './components/PhotoBook';
import Footer from './components/Footer';
// import Map from './components/Map';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <PhotoBook />
            {/* <Map /> */}
            <Footer />
        </div>
    );
};

export default HomePage;