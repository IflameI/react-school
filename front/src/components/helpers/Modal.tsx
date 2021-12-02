import classNames from 'classnames';

import { Dispatcher } from '../../globalTypes/setActionType';

interface IModal {
  active: boolean;
  setModalActive: Dispatcher<boolean>;
}

const Modal: React.FC<IModal> = ({ active, setModalActive, children }) => {
  return (
    <div
      className={classNames('modal', {
        'modal active': active,
      })}
      onClick={() => setModalActive(false)}>
      <div
        className={classNames('modal__content', {
          'modal__content active': active,
        })}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
