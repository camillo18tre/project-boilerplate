import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TranslationContext } from '../../context/TranslationContext';

const FooterHeader = () => {
  const { t } = useContext(TranslationContext);

  return (
    <div>
      <div className="flex justify-center mb-10">
        <Image
          src="/brand.svg"
          width={38.78}
          height={69.72}
          alt="El valet brand"
        />
      </div>

      <h4 className="text-4xl text-center">
        {t.footer_claim}
        <br />
        <span className="text-2xl">
          <Link href="/booking">
            <a className="italic duration-700 ease-in-out text-cream hover:underline">
              {t.btn_book_now}
            </a>
          </Link>{' '}
          {t.footer_claim_2}
        </span>
      </h4>
    </div>
  );
};

export default FooterHeader;
