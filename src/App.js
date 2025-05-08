import React, { lazy } from 'react';
// import Counter from './features/counter/Counter';
// import CounterNew from './features/counterNew/CounterNew';
// import Header from './components/Header';

const Counter = lazy(() => import('./features/counter/Counter'));
const Header = lazy(() => import('./components/Header'));
const CounterNew = lazy(() => import('./features/counterNew/CounterNew'));

export default function App() {
  return (
    <div>
      <h2>Test</h2>
      <Header/>
      <Counter />
      <CounterNew/>
    </div>
  );
}
