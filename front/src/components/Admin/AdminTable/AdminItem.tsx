import Icon from '../../../assets/img/pencil.png';

interface IAdminItem {
  id: number;
  name: string;
  role: string;
}

const AdminItem: React.FC<IAdminItem> = ({ id, name, role }) => {
  const onClickChangeRole = (id: number) => {};
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td className='admin__change'>
        <div className='admin__dropdown'>
          <span>
            {role} <img src={Icon} alt='icon' />
          </span>
          <div className='admin__dropdown-content'>
            <ul>
              <li>TEACHER</li>
              <li>2</li>
            </ul>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default AdminItem;
