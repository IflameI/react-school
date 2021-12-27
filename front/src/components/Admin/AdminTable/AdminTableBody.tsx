import { useEffect } from 'react';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

import AdminItem from './AdminItem';
import { Loader } from '../..';

const AdminTableBody = () => {
  const { getTeacherAndStudent, getAllAvaliableRoles } = useActions();
  const { userClassData, isLoader } = useTypedSelector((state) => state.userClass);

  useEffect(() => {
    getTeacherAndStudent();
    getAllAvaliableRoles();
  }, []);

  return (
    <tbody className='admin__table-body'>
      {isLoader ? (
        <div className='admin__loader'>
          <Loader />
        </div>
      ) : (
        userClassData.map((item, index) => (
          <AdminItem hiddenId={item.id} visibleId={index + 1} name={item.name} role={item.role} />
        ))
      )}
    </tbody>
  );
};

export default AdminTableBody;
