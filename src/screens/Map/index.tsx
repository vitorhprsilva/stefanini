import React, {useState} from 'react'
import { SlotEmpty } from '../../components/slot-empty'

import IconAnswer from '../../assets/IconAnswer.svg'
import ImageBulbasaur from '../../assets/imageBulbasaur.png'

import { Pokemon, defaultPokemon } from '../../domain'

import './styles.css'

export const MapPokemon = () => {

  
  let listPokemons: Pokemon[] = [defaultPokemon, defaultPokemon, defaultPokemon, defaultPokemon, defaultPokemon, defaultPokemon]
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  

  return (
    <div className='map-pokemon'>
      <div className='slots-pokemon'>
        {
          listPokemons.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <SlotEmpty color='#00D68F' borderColor='#004A45'>
                  {pokemon.name==='' ? <img src={IconAnswer} alt='icon answer' /> : <img src={ImageBulbasaur} alt='pokemon bulbasaur' />}
                </SlotEmpty>
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}