import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import FinishedProducts from './pages/FinishedProducts';
import './App.css';
import Footer from './components/Footer';
export default function App() {
  return (
    <>
    <Layout>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos-terminados" element={<FinishedProducts />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Layout>
    <Footer/>
    </>
  );
}