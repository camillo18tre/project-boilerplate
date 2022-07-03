import Link from 'next/link';
import FooterHeader from './footer/FooterHeader';
import FooterContainer from './footer/FooterContainer';
import FooterCredits from './footer/FooterCredits';
import Separator from './Separator';

const Footer = () => {
  return (
    <div className="relative z-0 bg-darkBrown">
      <div className="max-w-4xl px-10 py-20 mx-auto">
        <FooterHeader />
        <Separator />
        <FooterContainer />
        <Separator />
        <FooterCredits />
      </div>
    </div>
  );
};

export default Footer;
