import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Link href="/">
    <a className="h-10">
      <Image
        alt="El Valet Canelli"
        src="/vercel.svg"
        width={90.65}
        height={40}
      />
    </a>
  </Link>
);

export default Logo;
