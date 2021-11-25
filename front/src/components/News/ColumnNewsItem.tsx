interface IColumnNewsItem {
  title: string;
  text: string;
  date: string;
}

const ColumnNewsItem: React.FC<IColumnNewsItem> = ({ title, text, date }) => {
  return (
    <div className='column-news__item'>
      <a href='#' className='news__subtitle'>
        {title}
      </a>
      <p className='news__text'>{text}</p>
      <div className='news__date'>{date}</div>
    </div>
  );
};

export default ColumnNewsItem;
