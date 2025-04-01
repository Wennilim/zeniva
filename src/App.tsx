import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollToTop } from "@/components/ScrollToTop";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto bg-relax-yellow">
      <div className="flex flex-col w-full justify-center items-center">
        <Header />
        <Hero />
        <AboutUs />
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
}

export default App;
