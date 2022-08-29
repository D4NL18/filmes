import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from './views/MovieList/MovieList'
import Descricao from './views/Descricao/Descricao'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} /> 
          <Route path="/descricao/:id" element={<Descricao />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;