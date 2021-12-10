import { Routes, Route } from 'react-router';

import { Header, MainPage, CabinetPage, NotPermisionPage, AdminCabinetPage } from './components';
import { useTypedSelector } from './redux/typeHooks/useTypedSelector';

function App() {
  const { isAuth, dataUser } = useTypedSelector((state) => state.user);
  const isRoleUser = isAuth && dataUser.role === 'USER';
  const isRoleAdmin = isAuth && dataUser.role === 'ADMIN';
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route
          path='/cabinet'
          element={
            isRoleUser ? <CabinetPage /> : isRoleAdmin ? <AdminCabinetPage /> : <NotPermisionPage />
          }
        />
      </Routes>
    </>
  );
}

export default App;
