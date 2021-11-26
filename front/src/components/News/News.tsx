import { ColumnNewsItem, NewsItem } from '..';
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
              <NewsItem
                image={ImageBoy}
                subtitle={'Поздравляем Попова Андрея!'}
                text={
                  '         На прошедшем недавно Первенстве России по боксу Андрей занял первое место ввоей возрастной группе. В тяжелом бою Андрей победил сильных соперников и вошел в резерв молодежной сборной России по боксу.'
                }
                date={'22.02.2021'}
              />
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
              />
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
