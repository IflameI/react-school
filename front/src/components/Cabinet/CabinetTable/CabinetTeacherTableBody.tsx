import { useEffect } from 'react';
import { CabinetTeacherItem } from '../..';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

const CabinetTeacherTableBody: React.FC = () => {
  const { dataUser } = useTypedSelector((state) => state.user);
  const { userClassData } = useTypedSelector((state) => state.userClass);
  const { getStudentsByClass } = useActions();

  useEffect(() => {
    getStudentsByClass(dataUser.userClass);
  }, []);
  return (
    <tbody>
      {userClassData.map((item, index) => (
        <CabinetTeacherItem
          hiddenId={item.id}
          visibleId={index + 1}
          name={item.name}
          gradeOne={4}
          gradeTwo={5}
          gradeThree={5}
          gradeFour={4}
          subject={'Алгебра'}
        />
      ))}
    </tbody>
  );
};

export default CabinetTeacherTableBody;
