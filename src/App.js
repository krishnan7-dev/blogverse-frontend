import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Profile from './components/Profile';

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={ <Home/> }></Route>
            <Route exact path="/blogs" element={ <Blogs/> }></Route>
            <Route exact path="/login" element={ <Login/> }></Route>
            <Route exact path="/signup" element={ <Signup/> }></Route>
            <Route path='/profile' element={ <Profile/> }></Route>
          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
