import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    
    <Router>
      <ul> 
        <li>
          <Link to="/"> Home </Link>
        </li> 
        <li>
          <Link to="/AboutUs"> About us </Link>
        </li>
        <li>
          <Link to="/Contact"> Contact  </Link>
        </li>
      </ul>
      
      <Routes> 
       
       <Route path='/' element={<Home />}></Route>

        <Route path='/AboutUs' element={<AboutUs />}></Route>

        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
