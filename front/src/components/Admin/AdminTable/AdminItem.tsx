import Icon from '../../../assets/img/pencil.png';

interface IAdminItem {
  id: number;
  name: string;
  role: 'Ученик' | 'Учитель';
}

const AdminItem: React.FC<IAdminItem> = ({ id, name, role }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td className='admin__change'>
        <span>
          {role} <img src={Icon} alt='icon' />
        </span>
      </td>
    </tr>
  );
};

export default AdminItem;
