import './App.css';
import Navbar from './layout/Navbar/Navbar';
import Header from './components/Header/Header';
import Virtue from './components/Virtue/Virtue';
import Meaning from './components/Meaning/Meaning';
import Essentials from './components/Essentials/Essentials';
import Conditions from './components/Conditions/Conditions';
import ThingsBreak from './components/ThingsBreak/ThingsBreak';
import Requires from './components/Requires/Requires';
import Rights from './components/Rights/Rights';
import Investigation from './components/Investigation/Investigation';
import Footer from './layout/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import Source from './components/Source/Source';




function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="Header" index element={<Header />} />

        <Route path="/" index element={<Header />} /> 

        <Route path="Virtue" element={<Virtue />} />

        <Route path="Meaning" element={<Meaning />} />

        <Route path="Essentials" element={<Essentials />} />

        <Route path="Conditions" element={<Conditions />} />

        <Route path="ThingsBreak" element={<ThingsBreak />} />

        <Route path="Requires" element={<Requires />} />

        <Route path="Rights" element={<Rights />} />

        <Route path="Investigation" element={<Investigation />} />

        <Route path="Source" element={<Source />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
