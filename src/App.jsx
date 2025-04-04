import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import AboutPage from './pages/AboutPage';
import MissilePage from './pages/MissilePage';
import SatellitePage from './pages/SatellitePage';
import Topbar from './components/common/Topbar';
import Drone from './pages/Drone';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/missile' element={<MissilePage />} />
        <Route path='/satellite' element={<SatellitePage />} />
        <Route path='/launchVehicle' element={<Drone />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App