import React, {useMemo, useState, useCallback} from 'react'
import { SlotEmpty } from '../../components/slot-empty'

import IconAnswer from '../../assets/IconAnswer.svg'
import ImageBulbasaur from '../../assets/imageBulbasaur.png'

import { Pokemon, defaultPokemon, bulbasaurPokemon } from '../../domain'

import './styles.css'
export const MapPokemon = () => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  return (
    <div className='map-pokemon'>
      <div className='slots-pokemon'>
        {
          pokemons.length === 0 ?  
          
          (
            <div>
              <SlotEmpty color='#00D68F' borderColor='#004A45'>
                <img src={IconAnswer} alt='icon answer' />
              </SlotEmpty>
            </div>
          )

          :

          (pokemons?.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <SlotEmpty color='#fff' borderColor='#00D68F'>
                  {<img src={ImageBulbasaur} alt='pokemon bulbasaur' style={{height: '9vh'}} />}
                </SlotEmpty>
              </div>
            )
          }))
        }
      </div>

        <button onClick={() => setPokemons([bulbasaurPokemon, ...pokemons])}>Add Pokemon</button>
        <button onClick={() => console.log(pokemons)}>ver lista</button>
        
    </div>
  )
}