import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'

import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {

  return (
  
          <Router>
            
            <NavBar />
      
      <Routes> 
       
       <Route path='/' element={<Home />}></Route>

        <Route path='/AboutUs' element={<AboutUs />}></Route>

        <Route path='/Contact' element={<Contact />}></Route>
      
      </Routes>

      <Footer />

    </Router>
    

  );
}

export default App;
