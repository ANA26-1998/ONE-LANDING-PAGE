import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Features from './components/Features';
import Prototype from './components/Prototype';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import './utils/animations.css';

function App() {
  // Update document title
  React.useEffect(() => {
    document.title = 'ONE - AI-Assisted Lesson Planning';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Mission />
      <Features />
      <Prototype />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;