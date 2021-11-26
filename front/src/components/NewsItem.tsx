interface INewsItem {
  image: string;
  subtitle: string;
  text: string;
  date: string;
}

const NewsItem: React.FC<INewsItem> = ({ image, subtitle, text, date }) => {
  return (
    <div className='news__item'>
      <div className='news__image'>
        <img src={image} alt='boy' />
      </div>
      <div className='news__info'>
        <a href='#' className='news__subtitle'>
          {subtitle}
        </a>
        <p className='news__text'>{text}</p>
        <div className='news__date'>{date}</div>
      </div>
    </div>
  );
};

export default NewsItem;
