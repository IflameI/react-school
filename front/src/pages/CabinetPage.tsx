import { CabinetTable } from '../components';

const CabinetPage: React.FC = () => {
  return (
    <section className='cabinet'>
      <div className='container'>
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
