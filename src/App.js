import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
const Counter = lazy(() => import('./features/counter/Counter'));
const Header = lazy(() => import('./components/Header/Header'));
const CounterNew = lazy(() => import('./features/counterNew/CounterNew'));
const Home = lazy(() => import('./pages/Home'));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<p>About</p>} />
          <Route path="/counter1" element={<Counter />} />
          <Route path="/counter2" element={<CounterNew />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
