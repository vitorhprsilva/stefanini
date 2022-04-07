import React from 'react'
import { Pokemon } from '../../domain'

import { SlotEmpty } from '../slot-empty'
import ImageBulbasaur from '../../assets/imageBulbasaur.png'
import Pokeball from '../../assets/Pokeball.svg'

import './styles.css'

type modalProps = {
  show: boolean
  onClose: () => void
  pokemon: Pokemon
  onConfirm: (pokemon: Pokemon) => void
}

export const ModalCapturaPokemon = ({show, onClose, pokemon, onConfirm}: modalProps) => {

  return(
    <div className='modal-add-pokemon' style={{opacity: `${show ? 1 : 0}` }}>
      <div className='modal-content'>
        <SlotEmpty onPress={onClose} color='#fff' borderColor='#00D68F' style={{position: 'relative', left: '85%', bottom: '4.5vw' }}>
          <button className="button">
              <div className="button__line button__line--first"></div>
              <div className="button__line button__line--second"></div>
          </button>
        </SlotEmpty>
        <div className='initial-modal'>
          <SlotEmpty onPress={()=>{}} color='#fff' borderColor='#00D68F' style={{ width: '50%', height: '20vh', position: 'relative', top: -60, left: '0%' }}>
            <img src={ImageBulbasaur} alt='bulbasaur' style={{height: '9%'}} />
          </SlotEmpty>

          <div className='div-datas'>
            <label> {pokemon.name} </label>
          </div>

          <div className='div'>
            <div className='div-datas-division'>
              <label className='label-information'>HP</label>
              <label>{pokemon.hp}/{pokemon.hp}</label>
            </div>

            <div className='div-datas-division'>
              <label className='label-information'>ALTURA</label>
              <label>{pokemon.height} m</label>
            </div>

            <div className='div-datas-division' style={{border: 'none'}}>
              <label className='label-information'>PESO</label>
              <label>{pokemon.weight} Kg</label>
            </div>
          </div>

          <div className="div">
              <div className="div__content">
                  TIPO
              </div>
              <div className="div__separator"></div>
          </div>

          <div className="type-information">
              {pokemon.types.map(
                (type, index) => {
                  return (
                    <div key={index} className="type-information__content" style={{backgroundColor: `${type.color}`}}>
                      {type.name}
                    </div>
                  )
                }
              )}
          </div>

          <div className="div">
              <div className="div__content">
                  HABILIDADES
              </div>
              <div className="div__separator"></div>
          </div>

          <div className="habilitie-information">
              {pokemon.habilities.map((hability, index) => <label key={index} className='label-habilities'>{hability},</label>)}
          </div>

         
          <button onClick={() => {onClose()}} className='btn-capture-pokemon' >
            <img src={Pokeball} alt='Pokeball' style={{height: '90%'}} />
          </button>
         
        </div>        
      </div>
    </div>
  )
}