import classNames from 'classnames';

import { Dispatcher } from '../../../globalTypes/setActionType';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

interface ICabinetTeacherTab {
  name: string;
  activeTab: string;
  setActiveTab: Dispatcher<string>;
}

const CabinetTeacherTab: React.FC<ICabinetTeacherTab> = ({ name, setActiveTab, activeTab }) => {
  const { dataUser } = useTypedSelector((state) => state.user);
  const { getStudents } = useActions();

  const onTabClick = () => {
    getStudents(dataUser.userClass, name);
    setActiveTab(name);
  };
  return (
    <div className='tabs-cabinet__item'>
      <div
        className={classNames('tabs-cabinet__button', {
          active: activeTab === name,
        })}>
        <button onClick={onTabClick}>{name}</button>
      </div>
    </div>
  );
};

export default CabinetTeacherTab;
