import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Footer from './components/footer';
import Portfolio from './components/portfolioItems';
import BlogPosts from './components/blogPosts';
import Contact from './components/contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio/>
      <BlogPosts/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
