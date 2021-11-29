import classNames from 'classnames';

interface INavSite {
  open: boolean;
}

const NavSite: React.FC<INavSite> = ({ open }) => {
  return (
    <nav
      className={classNames('header__navTop', {
        open: open,
      })}>
      <ul className='menu__list'>
        <li className='menu__itemlink'>
          <span className='menu__link'>О школе</span>
        </li>
        <li className='menu__itemlink'>
          <span className='menu__link'>Документы</span>
        </li>
        <li className='menu__itemlink'>
          <span className='menu__link'>Школьная жизнь</span>
        </li>
        <li className='menu__itemlink'>
          <span className='menu__link'>Учебные материалы</span>
        </li>
        <li className='header-list-item'>
          <span className='menu__link'>Форум</span>
        </li>
        <li className='menu__itemlink'>
          <span className='menu__link'>Обращения</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavSite;
