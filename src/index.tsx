import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import GameOfLifeApp from './App';
import * as serviceWorker from './serviceWorker';

const About = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    }}
  >
    <div>Some text</div>
  </div>
);

const Next = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    }}
  >
    <div>Next</div>
  </div>
);

// 1️⃣ Changed from App to Root
function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <Routes>
      <Route path="/" element={<GameOfLifeApp />} />
      <Route path="/about" element={<About />} />
      <Route path="/next" element={<Next />} />
    </Routes>
  );
}

const router = createHashRouter([{ path: '*', Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')!).render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
