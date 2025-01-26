import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PhotoBook from './components/PhotoBook';
import Footer from './components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <PhotoBook />
            <Footer />
        </div>
    );
};

export default HomePage;