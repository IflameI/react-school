import { Routes, Route } from 'react-router';

import { Header, MainContent } from './components';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainContent />} />
      </Routes>
    </>
  );
}

export default App;
