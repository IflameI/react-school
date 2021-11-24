import { Routes, Route } from 'react-router';

import { HeaderCutstom, MainContent } from './components';

function App() {
  return (
    <>
      <HeaderCutstom />
      <Routes>
        <Route path='/' element={<MainContent />} />
      </Routes>
    </>
  );
}

export default App;
