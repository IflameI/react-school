import { AdminTable } from '../components';

const AdminCabinetPage: React.FC = () => {
  return (
    <section className='admin'>
      <div className='container'>
        <h3 className='admin__title cabinet__main-title'>Личный кабинет администратора</h3>
        <div className='admin__content'>
          <div className='admin__table-wrap'>
            <AdminTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminCabinetPage;
