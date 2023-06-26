import { Routes, Route } from 'react-router-dom';
import Home from './container/Home';
import {
  Signup,
  Navbar,
  Footer,
  ConnectWallet,
  Ranking,
  Marketplace,
} from './components';

const App = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/connectwallet' element={<ConnectWallet />} />
          <Route path='/ranking' element={<Ranking />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/*' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
