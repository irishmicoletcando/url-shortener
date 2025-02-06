import FooterLinks from "./FooterLinks";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="bg-very-dark-violet flex flex-col items-center sm:items-start sm:flex-row flex-wrap justify-center sm:justify-between px-6 sm:px-12 md:px-24 py-10 sm:py-16 text-center sm:text-left w-full">
      <p className="text-white font-semibold text-2xl md:text-4xl mb-6 lg:mb-6">Shortly</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-x-12 md:gap-x-24 mb-6 sm:mb-0 max-w-6xl text-center sm:text-left">
        <FooterLinks heading="Features" firstUrl="Link Shortening" secondUrl="Branded Links" thirdUrl="Analytics" />
        <FooterLinks heading="Resources" firstUrl="Blog" secondUrl="Developers" thirdUrl="Support" />
        <FooterLinks heading="Company" firstUrl="About" secondUrl="Our Team" thirdUrl="Careers" fourthUrl="Contact" />
      </div>

      <div className="flex flex-row space-x-3 mt-6 mb-10 sm:mb-0 sm:mt-0 justify-center sm:justify-start">
        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-cyan hover:cursor-pointer">
          <img src={facebook} alt="Facebook Logo" />
        </a>
        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-cyan hover:cursor-pointer">
          <img src={twitter} alt="Twitter Logo" />
        </a>
        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-cyan hover:cursor-pointer">
          <img src={pinterest} alt="Pinterest Logo" />
        </a>
        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-cyan hover:cursor-pointer">
          <img src={instagram} alt="Instagram Logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;