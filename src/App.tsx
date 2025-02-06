import AdvancedStatistics from "./components/AdvancedStatistics";
import BoostLinks from "./components/BoostLinks";
import ConvertedUrl from "./components/ConvertedUrl";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import ShortenLink from "./components/ShortenLink";
import { useConvertedUrl } from './context/ConvertedUrlContext';

export default function App() {
  const { urls } = useConvertedUrl(); 

  return (
    <div className="font-poppins bg-gray/20 overflow-x-hidden">
      <div className="mt-10 max-h-screen">
        <Navbar />
        <Heading />
      </div>
      <ShortenLink />
      <div>
        {urls.length > 0 && <ConvertedUrl />}
        <AdvancedStatistics />
      </div>
      <BoostLinks />
      <Footer />
    </div>
  );
}
