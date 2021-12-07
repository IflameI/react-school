import { CabinetTable } from '../components';

const CabinetPage: React.FC = () => {
  return (
    <section className='cabinet'>
      <div className='container'>
        <h3 className='cabinet__main-title'>Онлайн дневник ученика</h3>
        <div className='cabinet__row'>
          <div className='cabinet__table-wrap'>
            <CabinetTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabinetPage;
