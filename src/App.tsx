import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Advantages } from "@/components/Advantages";
import { Services } from "@/components/Services";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-relax-yellow">
      <div className="flex flex-col w-full justify-center items-center">
        <Header />
        <Hero />
        <AboutUs />
        <Advantages />
        <Services />
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
}

export default App;
