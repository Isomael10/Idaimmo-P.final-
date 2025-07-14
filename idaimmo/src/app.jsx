import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import PropertiesSection from './components/PropertiesSection';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import PropertyModal from './components/PropertyModal';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Login from './components/Login';
import Register from './components/Register';
import { properties as initialProperties } from './data/sampleProperties';

export default function App() {
  const [modalProperty, setModalProperty] = useState(null);
  const [filtered, setFiltered] = useState(initialProperties);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero onSearch={setFiltered} />
            <FeaturedProperties
              properties={initialProperties}
              onSelect={setModalProperty}
            />
            <PropertiesSection
              properties={filtered}
              onSelect={setModalProperty}
              allProperties={initialProperties}
              onFilter={setFiltered}
            />
            <Services />
            <About />
            <Testimonials />
            <Contact />
            {modalProperty && (
              <PropertyModal
                property={modalProperty}
                onClose={() => setModalProperty(null)}
              />
            )}
            <BackToTop />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}