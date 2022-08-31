import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from "./Header/header";
import { Details } from './Details/Details';
import Restaurant from './Admin/create/restaurant';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/details' element={<Details />} />
          <Route path='/admin/restaurant' element={<Restaurant />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
