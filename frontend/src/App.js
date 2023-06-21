import './App.css';
import BackgroundComponent from './components/BackgroundComponent';
import HeroComponent from './components/HeroComponent';
import ShowcaseComponent from './components/ShowcaseComponent';
import InterviewSectionComponent from './components/InterviewSectionComponent';
import FunFactsComponent from './components/FunFactsComponent';
import ThingsILoveComponent from './components/ThingsILoveComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <main className="w-full h-auto bg-black">

      <HeroComponent />
      <BackgroundComponent />
      <ShowcaseComponent />
      <InterviewSectionComponent/>
      <FunFactsComponent />
      <ThingsILoveComponent />
      <FooterComponent />
    </main>
  );
}

export default App;
