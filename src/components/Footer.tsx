import FooterLinks from "./FooterLinks"
import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"
import pinterest from "../assets/icon-pinterest.svg"
import instagram from "../assets/icon-instagram.svg"

const Footer = () => {
  return (
    <div className="bg-very-dark-violet flex justify-between px-24 py-16">
      <p className="text-white font-semibold text-2xl">Shortly</p>

      <div className="grid grid-cols-3 gap-x-24">
        <FooterLinks heading="Features" firstUrl="Link Shortening" secondUrl="Branded Links" thirdUrl="Analytics" />
        <FooterLinks heading="Resources" firstUrl="Blog" secondUrl="Developers" thirdUrl="Support" />
        <FooterLinks heading="Company" firstUrl="About" secondUrl="Our Team" thirdUrl="Careers" fourthUrl="Contact" />
      </div>

      <div className="flex flex-row space-x-5">
        <a href="facebook.com">
          <img src={facebook} alt="Facebook Logo" />
        </a>

        <a href="twitter.com">
          <img src={twitter} alt="Twitter Logo" />
        </a>

        <a href="pinterest.com">
          <img src={pinterest} alt="Pinterest Logo" />
        </a>

        <a href="instagram.com">
          <img src={instagram} alt="Instagram Logo" />
        </a>

      </div>
    </div>
  )
}

export default Footer