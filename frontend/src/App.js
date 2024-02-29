import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import AllBooks from './pages/AllBooks';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allbooks' element={<AllBooks/>}/>
        <Route path='/book/:id' element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;