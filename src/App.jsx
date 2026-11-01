import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { SpecialOffer } from './components/SpecialOffer';
import { Emergency } from './components/Emergency';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <WhyChoose />
        <SpecialOffer />
        <Emergency />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
