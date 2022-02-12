import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path='/' exact element={} />
      <Route path='/home' element={} />

      <Route path='/login' element={} />
      <Route path='/register' element={} />

      <Route path='/admin' element={} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;