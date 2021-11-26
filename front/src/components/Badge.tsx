import classNames from 'classnames';

interface IBadge {
  image: string;
  text: string;
  bigImage: boolean;
}

const Badge: React.FC<IBadge> = ({ image, text, bigImage }) => {
  return (
    <div
      className={classNames('badge__column', {
        'badge__column-big': bigImage,
      })}>
      <div
        className='badge__item'
        style={{
          backgroundImage: `url(${image})`,
        }}>
        <div className='badge__text'>{text}</div>
      </div>
    </div>
  );
};

export default Badge;
