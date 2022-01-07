import { useEffect, useState } from 'react';

import { CabinetTeacherTab, Loader } from '../../';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

const CabinetTeacherTabs: React.FC = () => {
  const { getAllAvaliableSubjects } = useActions();
  const { isLoader, subjectsData } = useTypedSelector((state) => state.subject);

  const [activeTab, setActiveTab] = useState('Физика');

  useEffect(() => {
    getAllAvaliableSubjects();
  }, []);
  return (
    <div className='cabinet__tabs tabs-cabinet'>
      <div className='tabs-cabinet__row'>
        {isLoader ? (
          <Loader />
        ) : (
          subjectsData.map((item) => (
            <CabinetTeacherTab
              activeTab={activeTab}
              key={item.id + 'key'}
              setActiveTab={setActiveTab}
              name={item.subjectName}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CabinetTeacherTabs;
