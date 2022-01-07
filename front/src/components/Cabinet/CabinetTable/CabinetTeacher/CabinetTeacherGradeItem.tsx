import classNames from 'classnames';
import { useState } from 'react';
import { useActions } from '../../../../redux/typeHooks/useActions';

import Icon from '../../../../assets/img/pencil.png';
import { useTypedSelector } from '../../../../redux/typeHooks/useTypedSelector';

interface ICabinetTeacherGradeItem {
  grade: number | string;
  hiddenId: number;
  namePeriod: string;
}

const avaliableGrade = [2, 3, 4, 5];

const CabinetTeacherGradeItem: React.FC<ICabinetTeacherGradeItem> = ({
  grade,
  hiddenId,
  namePeriod,
}) => {
  const { setChangeUserGrade } = useActions();
  const { userClassData } = useTypedSelector((state) => state.userClass);

  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const subjectName = userClassData[0].grade.subjectName;

  const onClickChangeGrade = (gradeSet: string | number) => {
    setChangeUserGrade({ userId: hiddenId, subjectName, period: namePeriod, grade: gradeSet });
  };

  const onClickShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <td className='admin__change'>
      <span
        className={classNames('admin__dropdown', {
          'admin__dropdown-active': showDropDown,
        })}>
        <span onClick={onClickShowDropDown} className='admin__icon'>
          {grade} <img src={Icon} alt='icon' />
        </span>
        <span className='admin__dropdown-content'>
          <ul>
            {avaliableGrade.map((item, index) => (
              <li key={index + item} onClick={() => onClickChangeGrade(item)}>
                {item}
              </li>
            ))}
          </ul>
        </span>
      </span>
    </td>
  );
};

export default CabinetTeacherGradeItem;
