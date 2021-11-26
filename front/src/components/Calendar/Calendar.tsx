import { Badge } from '..';
import image from '../../assets/img/calendar/bg.jpg';

const Calendar: React.FC = () => {
  return (
    <section className='calendar'>
      <div className='container'>
        <h4 className='calendar__title thema__title title'>Календарь событий</h4>
        <div className='calendar__row'>
          <Badge text={'Международный женский день'} image={image} bigImage={true} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
