import './assets/scss/main.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Cta from './components/cta/Cta';
import Destinations from './components/destinations/Destinations';
import Places from './components/places/Places';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cta />
        <Destinations />
        <Places />
      </main>
    </>
  );
}

export default App;
