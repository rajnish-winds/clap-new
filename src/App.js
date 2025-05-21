import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SignIn from './pages/Auth/SignIn/SignIn';
const Counter = lazy(() => import('./features/counter/Counter'));
const Header = lazy(() => import('./components/Layout/Header/Header'));
const CounterNew = lazy(() => import('./features/counterNew/CounterNew'));
const Home = lazy(() => import('./pages/Home/Home'));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <div className="contentWrapper">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<SignIn />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            {/* <Route path="/counter2" element={<CounterNew />} /> */}
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
