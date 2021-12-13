import { useEffect } from 'react';
import { AdminItem, Loader } from '../..';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

const AdminTable: React.FC = () => {
  const { getTeacherAndStudent } = useActions();
  const { userClassData, isLoader } = useTypedSelector((state) => state.userClass);

  useEffect(() => {
    getTeacherAndStudent();
  }, []);
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
        <tbody className='admin__table-body'>
          {isLoader ? (
            <div className='admin__loader'>
              <Loader />
            </div>
          ) : (
            userClassData.map((item, index) => (
              <AdminItem id={index + 1} name={item.name} role={item.role} />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default AdminTable;
