import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
<Router>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    {/* <Route path="*" element={<Navigate to="/" />} /> */}
    <Route path='*' element={<Navigate to="/" replace />} />
  </Routes>
  <Footer/>
</Router>
  );
}

export default App;
