import Icon1 from '../../assets/img/links/i_01.png';
import Icon2 from '../../assets/img/links/i_02.png';
import Icon3 from '../../assets/img/links/i_03.png';
import Icon4 from '../../assets/img/links/i_04.png';
import Icon5 from '../../assets/img/links/i_05.png';
import Icon6 from '../../assets/img/links/i_06.png';

import { LinkColumn } from '..';

const Links = () => {
  return (
    <section className='links'>
      <div className='container'>
        <div className='links__row'>
          <LinkColumn icon={Icon1} text='Основные сведения' />
          <LinkColumn icon={Icon2} text='Структура и органы управления' />
          <LinkColumn icon={Icon3} text='Документы' />
          <LinkColumn icon={Icon4} text='Образование' />
          <LinkColumn icon={Icon5} text='Образовательные стандарты' />
          <LinkColumn icon={Icon6} text='Руководство. Педагогический состав' />
        </div>
      </div>
    </section>
  );
};

export default Links;
