import './assets/scss/main.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Cta from './components/cta/Cta';
import Destinations from './components/destinations/Destinations';
import Places from './components/places/Places';
import Description from './components/description/Description';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cta />
        <Destinations />
        <Places />
        <Description />
      </main>
      <Footer />
    </>
  );
}

export default App;
