import AdvancedStatistics from "./components/AdvancedStatistics";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import ShortenLink from "./components/ShortenLink";

export default function App() {
  return (
    <div className="font-poppins mt-10 overflow-x-hidden">
      <Navbar />
      <Heading />
      <ShortenLink />
      <AdvancedStatistics />
      <BoostLinks />
      <Footer />
    </div>
  )
}