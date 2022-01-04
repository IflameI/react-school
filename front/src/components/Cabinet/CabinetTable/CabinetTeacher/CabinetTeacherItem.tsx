import { CabinetTeacherGradeItem } from '../../../';

interface ICabinetTeacherItem {
  hiddenId: number;
  name: string;
  visibleId: number;
  gradeOne: number;
  gradeTwo: number;
  gradeThree: number;
  gradeFour: number;
}

const CabinetTeacherItem: React.FC<ICabinetTeacherItem> = ({
  gradeOne,
  gradeFour,
  gradeThree,
  gradeTwo,
  hiddenId,
  visibleId,
  name,
}) => {
  const AvergeGrade = Math.round((gradeOne + gradeTwo + gradeThree + gradeFour) / 4);
  const allGrade = [
    {
      periodName: 'gradeFirstPer',
      periodValue: gradeOne,
    },
    {
      periodName: 'gradeSecondPer',
      periodValue: gradeTwo,
    },
    {
      periodName: 'gradeThirdPer',
      periodValue: gradeThree,
    },
    {
      periodName: 'gradeFourPer',
      periodValue: gradeFour,
    },
  ];
  return (
    <tr>
      <td>{visibleId}</td>
      <td>{name}</td>
      {allGrade.map((item) => (
        <CabinetTeacherGradeItem
          grade={item.periodValue}
          namePeriod={item.periodName}
          hiddenId={hiddenId}
        />
      ))}
      <td>{AvergeGrade}</td>
    </tr>
  );
};

export default CabinetTeacherItem;
