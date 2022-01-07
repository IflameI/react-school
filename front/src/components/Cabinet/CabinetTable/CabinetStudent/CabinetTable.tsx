import { CabinetTableBody } from '../../../';

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
      <CabinetTableBody />
    </table>
  );
};

export default CabinetTable;
