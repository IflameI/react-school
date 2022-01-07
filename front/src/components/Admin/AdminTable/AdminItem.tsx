import { useState } from 'react';
import classNames from 'classnames';

import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';
import { useActions } from '../../../redux/typeHooks/useActions';

import Icon from '../../../assets/img/pencil.png';

interface IAdminItem {
  visibleId: number;
  hiddenId: number;
  name: string;
  role: string;
}

const AdminItem: React.FC<IAdminItem> = ({ visibleId, hiddenId, name, role }) => {
  const { setChangeUserRole } = useActions();
  const { avaliableRoles } = useTypedSelector((state) => state.userClass);

  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const avaliableUserRoles = avaliableRoles.filter(
    (avaliableRole) => avaliableRole.value !== role && avaliableRole.value !== 'ADMIN',
  );

  const onClickChangeRole = (role: string) => () => {
    setChangeUserRole({ id: hiddenId, role });
  };

  const onClickShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <tr>
      <td>{visibleId}</td>
      <td>{name}</td>
      <td className='admin__change'>
        <span
          className={classNames('admin__dropdown', {
            'admin__dropdown-active': showDropDown,
          })}>
          <span onClick={onClickShowDropDown} className='admin__icon'>
            {role} <img src={Icon} alt='icon' />
          </span>
          <span className='admin__dropdown-content'>
            <ul>
              {avaliableUserRoles.map((item) => (
                <li key={item.id + 'key'} onClick={onClickChangeRole(item.value)}>
                  {item.value}
                </li>
              ))}
            </ul>
          </span>
        </span>
      </td>
    </tr>
  );
};

export default AdminItem;
