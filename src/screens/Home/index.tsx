import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/PokemonLogo.png'

import './styles.css'

export const Home = () => {
  return (
    <div className='initial-home-page'>
      <img src={Logo} alt='logo pokemon' />
      <Link to="/map" className='btn-start'>START</Link>
    </div>
  )
}