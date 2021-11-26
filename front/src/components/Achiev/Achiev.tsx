import { NewsItem } from '..';

import ImageGirl from '../../assets/img/achiev/img_01.jpg';
import ImageMan from '../../assets/img/achiev/img_02.jpg';

const Achiev = () => {
  return (
    <section className='achiev'>
      <div className='container'>
        <div className='achiev__row'>
          <div className='achiev__column'>
            <h4 className='achiev__title title'>Достижения учащихся</h4>
            <NewsItem
              image={ImageGirl}
              subtitle={'Поздравляем Попова Андрея!'}
              text={
                '         На прошедшем недавно Первенстве России по боксу Андрей занял первое место ввоей возрастной группе. В тяжелом бою Андрей победил сильных соперников и вошел в резерв молодежной сборной России по боксу.'
              }
              date={'22.02.2021'}
            />
          </div>
          <div className='achiev__column'>
            <h4 className='achiev__title title'>Достижения учителей</h4>
            <NewsItem
              image={ImageMan}
              subtitle={'Поздравляем Попова Андрея!'}
              text={
                '         На прошедшем недавно Первенстве России по боксу Андрей занял первое место ввоей возрастной группе. В тяжелом бою Андрей победил сильных соперников и вошел в резерв молодежной сборной России по боксу.'
              }
              date={'22.02.2021'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achiev;
