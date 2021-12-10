import { AdminItem } from '../..';

const AdminTable: React.FC = () => {
  return (
    <table className='admin__table'>
      <thead className='admin__thead'>
        <tr className='admin__head'>
          <th className='admin__table-title'>№</th>
          <th className='admin__table-title'>ИМЯ</th>
          <th className='admin__table-title'>РОЛЬ</th>
        </tr>
      </thead>
      <tbody className='admin__table-body'>
        <AdminItem id={1} name='Nik' role='Ученик' />
        <AdminItem id={2} name='Nik2' role='Ученик' />
        <AdminItem id={3} name='Nik3' role='Ученик' />
      </tbody>
    </table>
  );
};

export default AdminTable;
