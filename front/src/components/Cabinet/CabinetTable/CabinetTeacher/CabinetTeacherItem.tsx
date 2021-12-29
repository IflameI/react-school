interface ICabinetTeacherItem {
  hiddenId: number;
  name: string;
  visibleId: number;
  subject: string;
  gradeOne: number;
  gradeTwo: number;
  gradeThree: number;
  gradeFour: number;
}

const CabinetTeacherItem: React.FC<ICabinetTeacherItem> = ({
  subject,
  gradeOne,
  gradeFour,
  gradeThree,
  gradeTwo,
  hiddenId,
  visibleId,
  name,
}) => {
  const AvergeGrade = Math.round((gradeOne + gradeTwo + gradeThree + gradeFour) / 4);
  return (
    <tr>
      <td>{visibleId}</td>
      <td>{name}</td>
      <td>{subject}</td>
      <td>{gradeOne}</td>
      <td>{gradeTwo}</td>
      <td>{gradeThree}</td>
      <td>{gradeFour}</td>
      <td>{AvergeGrade}</td>
    </tr>
  );
};

export default CabinetTeacherItem;
