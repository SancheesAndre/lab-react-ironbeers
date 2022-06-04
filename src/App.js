import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AllBeersPage from './pages/AllBeersPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage';
import HomePage from './pages/HomePage';

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<AllBeersPage />} />
        <Route path='/random-beer' element={<RandomBeerPage />} />
        <Route path='/new-beer' element={<NewBeerPage />} />
        <Route path='/beers/:beerId' element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
