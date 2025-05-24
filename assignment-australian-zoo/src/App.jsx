import './App.css';

import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import AnimalSummary from './pages/AnimalSummary/AnimalSummary';
import AnimalDetails from './pages/AnimalDetails/AnimalDetails';

import Home from './pages/Home/Home';
import AnimalGroup from './pages/AnimalGroup/AnimalGroup';

function App() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mammals" element={<AnimalGroup groupType = "Mammals"/>} />
          <Route path="/reptiles" element={<AnimalGroup groupType = "Reptiles" />} />
          <Route path="/birds" element={<AnimalGroup groupType = "Birds" />} />

          <Route path="/:id" element={<AnimalSummary />} />
          <Route path="/mammals/:id" element={<AnimalDetails />} />
          <Route path="/reptiles/:id" element={<AnimalDetails />} />
          <Route path="/birds/:id" element={<AnimalDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
