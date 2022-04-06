import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home, MapPokemon } from '../screens'

export const RoutesComponents = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPokemon />} />
      </Routes>
    </BrowserRouter>
  )
}