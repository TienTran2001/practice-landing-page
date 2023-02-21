import React from 'react';

import {
  Navbar,
  Hero,
  Companies,
  Courses,
  Achievement,
  Categories,
  Feedback,
  CTA,
  Footer,
} from './components';
import './App.css';

const App = () => {
  return (
    <div className="font-sans overflow-hidden">
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
