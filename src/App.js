import './App.css'
import { Route,  Routes } from 'react-router-dom';
import LoginPage from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import Email from './Components/Email/Email';
import { InfoProvider } from './Context/InfoContext';


const App = () => {

  return (
   <div className='App'>
    <InfoProvider>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/email' element={<Email />} />
      </Routes>
      </InfoProvider>
      </div>
  );
};

export default App;
