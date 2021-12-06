import CabinetItem from './CabinetItem';

const CabinetTable: React.FC = () => {
  return (
    <table className='cabinet__table'>
      <thead className='cabinet__thead'>
        <tr className='cabinet__head'>
          <th className='cabinet__title'>№</th>
          <th className='cabinet__title'>Предметы</th>
          <th className='cabinet__title'>1 чтв</th>
          <th className='cabinet__title'>2 чтв</th>
          <th className='cabinet__title'>3 чтв</th>
          <th className='cabinet__title'>4 чтв</th>
          <th className='cabinet__title'>Год</th>
        </tr>
      </thead>
      <tbody>
        <CabinetItem
          position={1}
          gradeOne={4}
          gradeTwo={5}
          gradeThree={5}
          gradeFour={4}
          subject={'Алгебра'}
        />
        <CabinetItem
          position={2}
          gradeOne={3}
          gradeTwo={3}
          gradeThree={3}
          gradeFour={4}
          subject={'Геометрия'}
        />
        <CabinetItem
          position={3}
          gradeOne={3}
          gradeTwo={4}
          gradeThree={3}
          gradeFour={4}
          subject={'Литература'}
        />
        <CabinetItem
          position={4}
          gradeOne={5}
          gradeTwo={5}
          gradeThree={5}
          gradeFour={5}
          subject={'Русский язык'}
        />
        <CabinetItem
          position={5}
          gradeOne={4}
          gradeTwo={4}
          gradeThree={4}
          gradeFour={4}
          subject={'Английский язык'}
        />
      </tbody>
    </table>
  );
};

export default CabinetTable;
