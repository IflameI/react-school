import { useState } from 'react';

import { Modal, ModalAuthLogin, ModalAuthRegister } from '..';

import CabinetIcon from '../../assets/img/cabinet.png';
import VesrionIcon from '../../assets/img/vesrion.png';
import LoginIcon from '../../assets/img/login.svg';

import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';
import { NavLink } from 'react-router-dom';

const HeaderFunctional: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [authStatus, setAuthStatus] = useState<'login' | 'register'>('login');

  const { setUserLogout } = useActions();
  const { isAuth } = useTypedSelector((state) => state.user);
  return (
    <>
      <div className='sup-menu__right sup-menu__column'>
        <div className='sup-menu__functional'>
          {isAuth && (
            <div className='sup-menu__cabinet'>
              <img src={CabinetIcon} alt='login' />
              <NavLink to='/cabinet'>
                <span>Личный кабинет</span>
              </NavLink>
            </div>
          )}
          <div className='sup-menu__login'>
            <img src={LoginIcon} alt='login' />
            {!isAuth ? (
              <span onClick={() => setModalActive(true)}>Вход</span>
            ) : (
              <span onClick={setUserLogout}>Выход</span>
            )}
          </div>
          <div className='sup-menu__version'>
            <img src={VesrionIcon} alt='login' />
            <span>Версия для слабовидящих</span>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setModalActive={setModalActive}>
        <div className='modal__item'>
          {authStatus === 'login' ? (
            <ModalAuthLogin setModalActive={setModalActive} setAuthStatus={setAuthStatus} />
          ) : (
            <ModalAuthRegister setModalActive={setModalActive} setAuthStatus={setAuthStatus} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default HeaderFunctional;
