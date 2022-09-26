import Header from 'components/Header';
import Hero from 'components/Hero';
import About from 'components/About';
import Cases from 'components/Cases';
import Blog from 'components/Blog';
import Team from 'components/Team';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <Header />
      <Hero />
      <About />
      <Cases />
      <Blog />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
