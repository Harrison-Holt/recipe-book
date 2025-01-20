import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './UI/Login.jsx';
import Register from './UI/Register.jsx';
import Home from './UI/Home.jsx'
import { CssBaseline, GlobalStyles } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          'html, body': { margin: 0, padding: 0 },
          '#root': { minHeight: '100vh' },
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
