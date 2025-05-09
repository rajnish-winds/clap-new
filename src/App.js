import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

const Counter = lazy(() => import('./features/counter/Counter'));
const Header = lazy(() => import('./components/Header'));
const CounterNew = lazy(() => import('./features/counterNew/CounterNew'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="/about" element={<p>About</p>} />
          <Route path="/header" element={<Header />} />
          <Route path="/counter1" element={<Counter />} />
          <Route path="/counter2" element={<CounterNew />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
