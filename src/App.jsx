import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ManavOS from "./components/ManavOS";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020817] font-sans text-white">
      <Header />

      <Hero />

      <main>
        <Profile />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
        <ManavOS />
      </main>
    </div>
  );
}
