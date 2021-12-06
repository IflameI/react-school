interface ICabinetItem {
  position: number;
  subject: string;
  gradeOne: number;
  gradeTwo: number;
  gradeThree: number;
  gradeFour: number;
}

const CabinetItem: React.FC<ICabinetItem> = ({
  position,
  subject,
  gradeOne,
  gradeFour,
  gradeThree,
  gradeTwo,
}) => {
  const AvergeGrade = Math.round((gradeOne + gradeTwo + gradeThree + gradeFour) / 4);
  return (
    <tr>
      <td>{position}</td>
      <td>{subject}</td>
      <td>{gradeOne}</td>
      <td>{gradeTwo}</td>
      <td>{gradeThree}</td>
      <td>{gradeFour}</td>
      <td>{AvergeGrade}</td>
    </tr>
  );
};

export default CabinetItem;
