import React from 'react';
import CanvasContainer from './components/CanvasContainer';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#171720' }}>
      <h1 style={{ position: 'absolute', top: 40, left: 40, color: 'white', fontFamily: 'sans-serif', zIndex: 10 }}>Creative Developer.</h1>
      <CanvasContainer />
    </div>
  );
}