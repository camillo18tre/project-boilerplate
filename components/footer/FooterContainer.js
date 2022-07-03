import { useRouter } from 'next/router';
import FooterMenu from './FooterMenu';
import mainMenu from '../../data/menu.json';
import { groupBy } from '../../helpers/arrayHelpers';

const FooterContainer = () => {
  //
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? 'en' : 'it';

  //
  const menuTranslated = mainMenu[t];
  const groupedMenu = groupBy(menuTranslated, menu => menu.type);

  // console.log(groupedMenu);

  return (
    <div className="flex">
      <div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          {Array.from(groupedMenu).map((group, index) => {
            return (
              <FooterMenu
                key={index}
                label={group[0] !== 'social' && group[0]}
                menu={group[1]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
