import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import SingleService from './pages/SingleService';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<SingleService />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={'error'} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;