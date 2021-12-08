import { Routes, Route } from 'react-router';

import { Header, MainPage, CabinetPage, NotPermisionPage, AdminPage } from './components';
import { useTypedSelector } from './redux/typeHooks/useTypedSelector';

function App() {
  const { isAuth, dataUser } = useTypedSelector((state) => state.user);
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route
          path='/cabinet'
          element={
            isAuth && dataUser.role === 'USER' ? (
              <CabinetPage />
            ) : isAuth && dataUser.role === 'ADMIN' ? (
              <AdminPage />
            ) : (
              <NotPermisionPage />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
