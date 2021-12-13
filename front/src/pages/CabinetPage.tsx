import { CabinetTable } from '../components';
import { useTypedSelector } from '../redux/typeHooks/useTypedSelector';

const CabinetPage: React.FC = () => {
  const { dataUser } = useTypedSelector((state) => state.user);
  return (
    <section className='cabinet'>
      <div className='container'>
        <h3 className='cabinet__main-title'>Личный кабинет ученика</h3>
        <p className='cabinet__main-name'>
          Имя ученика: <span>{dataUser.name}</span>
        </p>
        <p className='cabinet__main-class'>
          Класс ученика: <span>{dataUser.userClass}</span>
        </p>
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
