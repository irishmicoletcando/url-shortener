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
    <div className="font-poppins overflow-x-hidden">
      <div className="mt-10">
        <Navbar />
        <Heading />
      </div>
        <ShortenLink />
      <div className="bg-gray/50 md:py-20">
        {convertedUrl && (
          <ConvertedUrl convertedUrl={convertedUrl} />
        )}
        <AdvancedStatistics />
      </div>
      <BoostLinks />
      <Footer />
    </div>
  );
}
