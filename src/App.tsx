import AdvancedStatistics from "./components/AdvancedStatistics";
import BoostLinks from "./components/BoostLinks";
import ConvertedUrl from "./components/ConvertedUrl";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import ShortenLink from "./components/ShortenLink";
import { useConvertedUrl } from './context/ConvertedUrlContext';

export default function App() {
  const { convertedUrl } = useConvertedUrl();

  return (
    <div className="font-poppins mt-10 overflow-x-hidden">
      <Navbar />
      <Heading />
      <ShortenLink />
      {convertedUrl && (
        <ConvertedUrl convertedUrl={convertedUrl} />
      )}
      <AdvancedStatistics />
      <BoostLinks />
      <Footer />
    </div>
  )
}