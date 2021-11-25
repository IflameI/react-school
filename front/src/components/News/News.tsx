import { ColumnNewsItem } from '..';
import ImageBoy from '../../assets/img/news/boy.jpg';

const News = () => {
  return (
    <section className='news'>
      <div className='container'>
        <div className='news__header'>
          <h3 className='news__title title'>Новости</h3>
          <div className='news__all'>
            <a href='#'>Все новости </a>
          </div>
        </div>
        <div className='news__body'>
          <div className='news__row'>
            <div className='news__column'>
              <div className='news__item'>
                <div className='news__image'>
                  <img src={ImageBoy} alt='boy' />
                </div>
                <div className='news__info'>
                  <a href='#' className='news__subtitle'>
                    Поздравляем Попова Андрея!
                  </a>
                  <p className='news__text'>
                    На прошедшем недавно Первенстве России по боксу Андрей занял первое место в
                    своей возрастной группе. В тяжелом бою Андрей победил сильных соперников и вошел
                    в резерв молодежной сборной России по боксу.
                  </p>
                  <div className='news__date'>22.02.2021</div>
                </div>
              </div>
            </div>
            <div className='news__column column-news'>
              <ColumnNewsItem
                title='Я помню чудное мгновенье…'
                text={
                  '    На третьем городском открытом фестивале-конкурсе художественного слова среди детей и молодежи Я помню чудное мгновенье… Шанин Артем получил диплом 1 степени в  номинации Литературно-музыкальная композиция.'
                }
                date='01.02.2021'
              />
              <ColumnNewsItem
                title='Я помню чудное мгновенье…'
                text={
                  '    На третьем городском открытом фестивале-конкурсе художественного слова среди детей и молодежи Я помню чудное мгновенье… Шанин Артем получил диплом 1 степени в  номинации Литературно-музыкальная композиция.'
                }
                date='01.02.2021'
              />{' '}
              <ColumnNewsItem
                title='Я помню чудное мгновенье…'
                text={
                  '    На третьем городском открытом фестивале-конкурсе художественного слова среди детей и молодежи Я помню чудное мгновенье… Шанин Артем получил диплом 1 степени в  номинации Литературно-музыкальная композиция.'
                }
                date='01.02.2021'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
