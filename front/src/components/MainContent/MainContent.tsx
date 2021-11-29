import { Banners, Calendar, Links, News, Speach, Thema } from '..';
import Achiev from '../Achiev/Achiev';

const MainContent: React.FC = () => {
  return (
    <>
      <Speach />
      <Links />
      <News />
      <Thema />
      <Calendar />
      <Achiev />
      <Banners />
    </>
  );
};

export default MainContent;
