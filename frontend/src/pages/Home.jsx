import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Feature from '../components/Home-Page-components/features/features';
import Footer from '../components/Home-Page-components/footer/Footer';
import Header from '../components/Home-Page-components/header/Header';
import HeroSection from '../components/Home-Page-components/hero-section/HeroSection';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('userId')) {
      const userId = localStorage.getItem('userId');
      // navigate(`/${userId}`);
    }
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <Feature />
      <Footer />
    </>
  );
};

export default Home;
