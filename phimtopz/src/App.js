import { Route, Routes } from 'react-router-dom';
import './css/main.scss';
import Home from './pages/Home';
import Productslist from './pages/Productslist';
import Layout from './layouts'
function App() {
  return (
    <div className="App" >
      <>
        <Routes>
        <Route element={<Layout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/Products" element={<Productslist/>} />
          </Route>
        </Routes>
      </>  
    </div>
  );
}

export default App;
