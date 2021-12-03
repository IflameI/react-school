import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Dispatcher } from '../../../globalTypes/setActionType';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

interface IModalAuthRegister {
  setModalActive: Dispatcher<boolean>;
  setAuthStatus: Dispatcher<'login' | 'register'>;
}

type ModalInputs = {
  email: string;
  password: string;
};

const ModalAuthRegister: React.FC<IModalAuthRegister> = ({ setModalActive, setAuthStatus }) => {
  const { isLoader, isAuth, error } = useTypedSelector((state) => state.user);
  const { fetchUserAuth, setUserError } = useActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ModalInputs>();

  const onSubmit: SubmitHandler<ModalInputs> = (data) => {
    fetchUserAuth(data, 'registration');
  };

  //Закрыть модалку,очистить поля и убрать ошибки после успешной регистрации
  useEffect(() => {
    if (isAuth) {
      setModalActive(false);
      setUserError('');
      reset();
    }
  }, [isAuth]);
  return (
    <>
      <div className='modal__top'>Регистрация</div>
      <div className='modal__body'>
        <form onSubmit={handleSubmit(onSubmit)} className='modal__form'>
          <div className='modal__wrap'>
            <div className='modal__input'>
              <label>Ваша почта</label>
              <input
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Введите коректный email',
                  },
                })}
              />
              {errors.email && errors.email.type === 'required' && (
                <span className='auth__error'>Заполните поле</span>
              )}
              {errors.email && errors.email.type === 'pattern' && (
                <span className='auth__error'>{errors.email.message}</span>
              )}
            </div>
            <div className='modal__input'>
              <label>Ваш пароль</label>
              <input
                type='password'
                {...register('password', { required: true, minLength: 4, maxLength: 16 })}
              />
              {errors.password && errors.password.type === 'required' && (
                <span className='auth__error'>Заполните поле</span>
              )}
              {errors.password && errors.password.type === 'maxLength' && (
                <span className='auth__error'>Максимум 16 символов</span>
              )}
              {errors.password && errors.password.type === 'minLength' && (
                <span className='auth__error'>Минимум 4 символа</span>
              )}
            </div>
          </div>
          <div className='modal__footer'>
            <button type='submit' disabled={isLoader} className='btn'>
              Зарегистрироваться
            </button>
          </div>
          {error && <div className='auth__error auth__error-m'>{error}</div>}
          <div className='modal__notice'>
            Уже есть аккаунт?
            <span onClick={() => setAuthStatus('login')}>Войдите в свой аккаунт</span>
          </div>
        </form>
        {isLoader ? 'Loading' : ''}
      </div>
    </>
  );
};

export default ModalAuthRegister;
