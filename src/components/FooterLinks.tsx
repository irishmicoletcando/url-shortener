interface Props {
  heading: string;
  firstUrl: string;
  secondUrl: string;
  thirdUrl: string;
  fourthUrl?: string;
}

const FooterLinks: React.FC<Props> = ({ heading, firstUrl, secondUrl, thirdUrl, fourthUrl }) => {
  return (
    <div className="space-y-5 text-center sm:text-left">
      <p className="text-white font-semibold">{heading}</p>
      <ul className="space-y-3">
        <li className="text-gray hover:text-cyan hover:cursor-pointer text-sm"><a href="#">{firstUrl}</a></li>
        <li className="text-gray hover:text-cyan hover:cursor-pointer text-sm"><a href="#">{secondUrl}</a></li>
        <li className="text-gray hover:text-cyan hover:cursor-pointer text-sm"><a href="#">{thirdUrl}</a></li>
        {fourthUrl && <li className="text-gray hover:text-cyan hover:cursor-pointer text-sm"><a href="#">{fourthUrl}</a></li>}
      </ul>
    </div>
  );
};

export default FooterLinks;