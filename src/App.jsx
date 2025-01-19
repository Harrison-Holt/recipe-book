import Login from'./UI/Login.jsx'
import Register from'./UI/Register.jsx'
import { GlobalStyles, CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
  <>
  <CssBaseline />
  <GlobalStyles
  styles={{
    'html, body': {
      padding: 0, 
      margin: 0, 
      overflowX: 'hidden'
    }, 
    '#root': {
      padding: 0, 
      margin: 0, 
      width: '100%', 
      minHeight: '100vh'
    }
  }}
  />
  <Router>
    <Routes>
      <Route path='/login' element={< Login />} />
      <Route path='/register' element={< Register />} />
      <Route path='*' element={<Login />} />
      </Routes>
  </Router>
  </>
  )
}

export default App 
