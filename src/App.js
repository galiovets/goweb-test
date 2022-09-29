import { Toaster } from 'react-hot-toast';
import './js/lightbox-plus-jquery.min';
import './styles/lightbox.css';
import Header from 'components/Header';
import Hero from 'components/Hero';
import About from 'components/About';
import Cases from 'components/Cases';
import Blog from 'components/Blog';
import Team from 'components/Team';
import Form from 'components/Form';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-right" />
      <Header />
      <Hero />
      <About />
      <Cases />
      <Blog />
      <Team />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
