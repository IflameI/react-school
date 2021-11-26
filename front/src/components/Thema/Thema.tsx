import { Badge } from '..';

import sportImage from '../../assets/img/thema/sport.jpg';
import englishImage from '../../assets/img/thema/english.jpg';

const Thema: React.FC = () => {
  return (
    <section className='thema'>
      <div className='container'>
        <h4 className='thema__title title'>Тематика года</h4>
        <div className='thema__row'>
          <Badge text={'Год физкультуры'} image={sportImage} bigImage={false} />
          <Badge text={'Год английского языка'} image={englishImage} bigImage={false} />
        </div>
      </div>
    </section>
  );
};

export default Thema;
