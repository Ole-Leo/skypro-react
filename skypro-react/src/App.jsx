import './app.css';
import { Routes, Route } from 'react-router-dom';

import Navigation from './homework_11/components/Navigation/Navigation';
import { Homepage } from './homework_11/pages/Homepage/Homepage';
import { About } from './homework_11/pages/About/About';
import { CartPage } from './homework_11/pages/CartPage/CartPage';
import { LoginForm } from './homework_11/pages/LoginFormPage/LoginForm';
import { NotFound } from './homework_11/pages/NotFoundPage/NotFound';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
