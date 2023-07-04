import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import Movie from './pages/Movie';
import Netflix from './pages/Netflix';
import TvShow from './pages/TvShow';
import SignUpPage from './pages/SignUpPage';
import Player from './pages/Player';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/movies' element={<Movie/>}/>
      <Route path='/' element={<Netflix/>}/>
      <Route path='/tv' element={<TvShow/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/player' element={<Player/>}/>
      
      
    </Routes>
    
   
    </BrowserRouter>
    
  
    </>

  );
}

export default App;
