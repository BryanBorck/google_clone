import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from './pages/Default';
import Styled from './pages/Styled';
import Form from './pages/Form';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Default/>} />
        <Route path="/styled" exact element={<Styled/>} />
        <Route path="/form" exact element={<Form/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;