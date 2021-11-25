interface ILinkColumn {
  icon: string;
  text: string;
}

const LinkColumn: React.FC<ILinkColumn> = ({ icon, text }) => {
  return (
    <div className='links__column'>
      <a href='#' className='links__item'>
        <span className='linkdecor__img'>
          <img src={icon} alt='#' />
        </span>
        <span className='text'>{text}</span>
      </a>
    </div>
  );
};

export default LinkColumn;
