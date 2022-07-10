import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from "./Header/header";
import { Details } from './Details/Details';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
