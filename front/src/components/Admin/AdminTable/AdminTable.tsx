import { AdminTableBody } from '../../';

const AdminTable: React.FC = () => {
  return (
    <>
      <table className='admin__table'>
        <thead className='admin__thead'>
          <tr className='admin__head'>
            <th className='admin__table-title'>№</th>
            <th className='admin__table-title'>ИМЯ</th>
            <th className='admin__table-title'>РОЛЬ</th>
          </tr>
        </thead>
        <AdminTableBody />
      </table>
    </>
  );
};

export default AdminTable;
