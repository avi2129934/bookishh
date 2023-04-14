import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Layout from './pages/Layout'
import Explore from './pages/Explore'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='explore' element={<Explore/>}></Route>
            <Route path='search' element={<Search/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;