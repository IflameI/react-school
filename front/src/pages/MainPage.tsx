import { Banners, Calendar, Links, News, Speach, Thema } from '../components';
import Achiev from '../components/Achiev/Achiev';

const MainPage: React.FC = () => {
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

export default MainPage;
