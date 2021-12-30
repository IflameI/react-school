import { CabinetTeacherTable, CabinetTeacherTabs } from '../components';
import { useTypedSelector } from '../redux/typeHooks/useTypedSelector';

const CabinetTeacherPage: React.FC = () => {
  const { dataUser } = useTypedSelector((state) => state.user);
  return (
    <section className='cabinet'>
      <div className='container'>
        <h3 className='cabinet__main-title'>Личный кабинет учителя</h3>
        <p className='cabinet__main-name'>
          Имя учителя: <span>{dataUser.name}</span>
        </p>
        <p className='cabinet__main-class'>
          Класс учителя: <span>{dataUser.userClass}</span>
        </p>
        <CabinetTeacherTabs />
        <div className='cabinet__row'>
          <div className='cabinet__table-wrap'>
            <CabinetTeacherTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabinetTeacherPage;
