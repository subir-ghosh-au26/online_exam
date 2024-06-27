// import { Button } from 'antd';
import './stylesheets/theme.css';
import './stylesheets/textelements.css';
import './stylesheets/alignments.css';
import './stylesheets/custom-components.css';
import './stylesheets/form-elements.css';
import './stylesheets/layout.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/common/login';
import Register from './pages/common/register';
import Home from './pages/common/Home/index'
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
