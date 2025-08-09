import Hero from '../components/hero';
import Features from '../components/Features';
import Steps from '../components/steps';
import FAQ from '../components/faq';

function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Features />
        <Steps />
        <FAQ />
      </main>
    </div>
  );
}

export default Home;