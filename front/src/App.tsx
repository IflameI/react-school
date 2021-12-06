import { Routes, Route } from 'react-router';

import { Header, MainPage, CabinetPage, NotPermisionPage } from './components';
import { useTypedSelector } from './redux/typeHooks/useTypedSelector';

function App() {
  const { isAuth } = useTypedSelector((state) => state.user);
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/cabinet' element={isAuth ? <CabinetPage /> : <NotPermisionPage />} />
      </Routes>
    </>
  );
}

export default App;
