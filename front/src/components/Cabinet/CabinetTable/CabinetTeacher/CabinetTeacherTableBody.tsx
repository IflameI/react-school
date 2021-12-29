import { useEffect } from 'react';

import { CabinetTeacherItem, Loader } from '../../..';

import { useActions } from '../../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../../redux/typeHooks/useTypedSelector';

const CabinetTeacherTableBody: React.FC = () => {
  const { dataUser } = useTypedSelector((state) => state.user);
  const { userClassData, isLoader } = useTypedSelector((state) => state.userClass);
  const { getStudents } = useActions();

  useEffect(() => {
    getStudents(dataUser.userClass, 'Алгебра');
  }, []);
  return (
    <tbody>
      {isLoader ? (
        <div className='admin__loader'>
          <Loader />
        </div>
      ) : (
        userClassData.map(
          (item, index) =>
            item.grade && (
              <CabinetTeacherItem
                hiddenId={item.id}
                visibleId={index + 1}
                name={item.name}
                gradeOne={item.grade[0].UserSubjects.gradeFirstPer}
                gradeTwo={item.grade[0].UserSubjects.gradeSecondPer}
                gradeThree={item.grade[0].UserSubjects.gradeThirdPer}
                gradeFour={item.grade[0].UserSubjects.gradeFourPer}
                subject={item.grade[0].subjectName}
              />
            ),
        )
      )}
    </tbody>
  );
};

export default CabinetTeacherTableBody;
