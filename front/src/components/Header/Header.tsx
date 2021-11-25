import VKIcon from '../../assets/img/i_01.svg';
import InstIcon from '../../assets/img/i_02.svg';
import OKIcon from '../../assets/img/i_03.svg';
import LoginIcon from '../../assets/img/login.png';
import VesrionIcon from '../../assets/img/vesrion.png';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__sup-menu sup-menu'>
        <div className='container'>
          <div className='sup-menu__row'>
            <div className='sup-menu__left sup-menu__column'>
              <div className='sup-menu__social'>
                <div className='sup-menu__text'>Мы в социальных сетях:</div>
                <div className='sup-menu__list'>
                  <ul>
                    <li>
                      <a href='#'>
                        <img width='38' src={VKIcon} alt='Pizza logo' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src={InstIcon} alt='#' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src={OKIcon} alt='#' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='sup-menu__right sup-menu__column'>
              <div className='sup-menu__functional'>
                <div className='sup-menu__login'>
                  <img src={LoginIcon} alt='login' />
                  <span>Вход</span>
                </div>
                <div className='sup-menu__version'>
                  <img src={VesrionIcon} alt='login' />
                  <span>Версия для слабовидящих</span>
                </div>
                <div className='menu__icon icon-menu'>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row-top header__row '>
        <div className='container'>
          <div className='row-top__content'>
            <div className='row-top__wrapper'>
              <div className='row-top__logo'>
                <div className='row-top__description'>REACT-SCHOOL</div>
              </div>
            </div>
            <div data-da='menu__list,last,991.98' className='row-top__contacts top-contacts'>
              <div className='top-contacts__info'>
                <div className='top-contacts__tel'>
                  <a href='tel:880035353'> +8 (800) 353-53 </a>
                </div>
                <div className='top-contacts__proffesion'>Директор</div>
                <div className='top-contacts__function'>
                  <a href='#'>Задать вопрос</a>
                </div>
              </div>
              <div className='top-contacts__info'>
                <div className='top-contacts__tel'>
                  <a href='tel:880035354'> +8 (800) 353-54 </a>
                </div>
                <div className='top-contacts__proffesion'>Приемная</div>
                <div className='top-contacts__function'>
                  <a href='#'>Все контакты</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-bottom header'>
        <div className='container'>
          <div className='header__row'>
            <nav className='header__menu menu'>
              <div className='menu__body'>
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
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
