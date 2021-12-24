import { useState } from 'react';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';
import Icon from '../../../assets/img/pencil.png';
import classNames from 'classnames';

interface IAdminItem {
  id: number;
  name: string;
  role: string;
}

const AdminItem: React.FC<IAdminItem> = ({ id, name, role }) => {
  const { avaliableRoles } = useTypedSelector((state) => state.userClass);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const avaliableUserRoles = avaliableRoles.filter(
    (avaliableRole) => avaliableRole.value !== role && avaliableRole.value !== 'ADMIN',
  );

  const onClickShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const onClickChangeRole = (id: number) => {};
  return (
    <tr>
      <td>{id}</td>
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
                <li>{item.value}</li>
              ))}
            </ul>
          </span>
        </span>
      </td>
    </tr>
  );
};

export default AdminItem;
