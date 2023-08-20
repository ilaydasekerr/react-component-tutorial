import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageOfLocation from "./components/ImageOfLocation";
import Navbar from "./components/Navbar";
import PageContent from "./components/PageContent";
import Project from "./components/Project";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <PageContent />
      <Project />
      <About />
      <Contact />
      <ImageOfLocation />
      <Footer />
    </>
  );
}
export default App;
