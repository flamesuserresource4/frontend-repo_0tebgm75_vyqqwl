import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;
