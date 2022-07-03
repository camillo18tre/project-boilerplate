import Link from 'next/link';

const FooterMenu = ({ label, menu }) => {
  return (
    <div>
      {label && (
        <h3 className="mb-2 text-sm tracking-wider uppercase text-cream">
          {label}
        </h3>
      )}
      <ul className="text-lg">
        {menu.map((item, index) => (
          <li className="mb-0.5" key={index}>
            <Link href={item.href}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
