import { useEffect } from 'react';

import { CabinetItem, Loader } from '../../../';
import { useActions } from '../../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../../redux/typeHooks/useTypedSelector';

const CabinetTableBody: React.FC = () => {
  const { dataUser } = useTypedSelector((state) => state.user);
  const { userClassData, isLoader } = useTypedSelector((state) => state.userClass);

  const { getUserGrade } = useActions();

  useEffect(() => {
    getUserGrade(dataUser.id);
  }, []);

  return (
    <tbody className='cabinet__tbody'>
      {isLoader ? (
        <div className='admin__loader'>
          <Loader />
        </div>
      ) : (
        userClassData[0].subjects?.map((item, index) => (
          <CabinetItem
            position={index + 1}
            key={item.id + 'key'}
            gradeOne={item.UserSubjects.gradeFirstPer}
            gradeTwo={item.UserSubjects.gradeSecondPer}
            gradeThree={item.UserSubjects.gradeThirdPer}
            gradeFour={item.UserSubjects.gradeFourPer}
            subject={item.subjectName}
          />
        ))
      )}
    </tbody>
  );
};

export default CabinetTableBody;
