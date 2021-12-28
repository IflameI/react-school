import { CabinetTeacherTableBody } from '../..';

const CabinetTeacherTable: React.FC = () => {
  return (
    <table className='cabinet__table'>
      <thead className='cabinet__thead'>
        <tr className='cabinet__head'>
          <th className='cabinet__title'>№</th>
          <th className='cabinet__title'>Имя ученика</th>
          <th className='cabinet__title'>Предмет</th>
          <th className='cabinet__title'>1 чтв</th>
          <th className='cabinet__title'>2 чтв</th>
          <th className='cabinet__title'>3 чтв</th>
          <th className='cabinet__title'>4 чтв</th>
          <th className='cabinet__title'>Год</th>
        </tr>
      </thead>
      <CabinetTeacherTableBody />
    </table>
  );
};

export default CabinetTeacherTable;
