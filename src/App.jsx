import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './UI/Login.jsx';
import Register from './UI/Register.jsx';
import Home from './UI/Home.jsx'
import Settings from './UI/Settings.jsx'
import Exploring_Recipes from './UI/Exploring_Recipes.jsx';
import My_Recipes from './UI/My_Recipes.jsx';
import { CssBaseline, GlobalStyles } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          'html, body': { margin: 0, padding: 0, overflowX: 'hidden' },
          '#root': { minHeight: '100vh' },
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/explore_recipes" element={<Exploring_Recipes />} />
          <Route path="/my_recipes" element={<My_Recipes />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
