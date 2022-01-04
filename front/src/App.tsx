import { Routes, Route } from 'react-router';

import {
  Header,
  MainPage,
  CabinetStudentPage,
  NotPermisionPage,
  AdminCabinetPage,
  CabinetTeacherPage,
} from './components';

import { useTypedSelector } from './redux/typeHooks/useTypedSelector';

function App() {
  //TODO: Доделать ux часть  таблиц.
  const { isAuth, dataUser } = useTypedSelector((state) => state.user);

  const isRoleStudent = isAuth && dataUser.role === 'STUDENT';
  const isRoleTeacher = isAuth && dataUser.role === 'TEACHER';
  const isRoleAdmin = isAuth && dataUser.role === 'ADMIN';
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route
          path='/cabinet'
          element={
            isRoleStudent ? (
              <CabinetStudentPage />
            ) : isRoleAdmin ? (
              <AdminCabinetPage />
            ) : isRoleTeacher ? (
              <CabinetTeacherPage />
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
