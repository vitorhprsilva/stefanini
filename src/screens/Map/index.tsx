import React, {useMemo, useState, useCallback} from 'react'
import { SlotEmpty } from '../../components/slot-empty'

import IconAnswer from '../../assets/IconAnswer.svg'
import IconAdd from '../../assets/IconAdd.svg'
import ImageBulbasaur from '../../assets/imageBulbasaur.png'

import { Pokemon } from '../../domain'

import {ModalAddPokemon} from '../../components/Add-pokemon'

import './styles.css'
export const MapPokemon = () => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [showModalAddPokemon, setShowModalAddPokemon] = useState<boolean>(false);

  let bulbasaur: Pokemon = {
    id: 0,
    name: 'Bulbasaur',
    hp: 45,
    height: 0.7,
    weight: 6.9,
    types: [{name: 'PLANTA'}, {name: 'VENENO'}],
    statistics: {
      Defense: 92,
      Attack: 92,
      SpecialDefense: 121,
      SpecialAttack: 121,
      Speed: 85
    }
  }

  const handleModal = () => {
    setShowModalAddPokemon(!showModalAddPokemon);
  }

  return (
    <div className='map-pokemon'>
      <div className='slots-pokemon'>
        {
          pokemons.length === 0 ?  
          
          (
            <div>
              <SlotEmpty onPress={()=>{}} color='#00D68F' borderColor='#004A45'>
                <img src={IconAnswer} alt='icon answer' />
              </SlotEmpty>
            </div>
          )

          :

          (pokemons?.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <SlotEmpty onPress={()=>{}} color='#fff' borderColor='#00D68F'>
                  {<img src={ImageBulbasaur} alt='pokemon bulbasaur' style={{height: '9vh'}} />}
                </SlotEmpty>
              </div>
            )
          }))
        }

        <div>
          <SlotEmpty onPress={handleModal} color='#FF3D71' borderColor='#DB2C66'>
            <img src={IconAdd} alt='icon add' />
          </SlotEmpty>
        </div>
      </div>

      <ModalAddPokemon show={showModalAddPokemon} onClose={handleModal} />

        <button onClick={() => setPokemons([bulbasaur, ...pokemons])}>Add Pokemon</button>
        <button onClick={() => console.log(pokemons)}>ver lista</button>
        
    </div>
  )
}