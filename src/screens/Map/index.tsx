import React, {useState} from 'react'
import IconAnswer from '../../assets/IconAnswer.svg'
import IconAdd from '../../assets/IconAdd.svg'
import ImageBulbasaur from '../../assets/imageBulbasaur.png'
import ImageAsh from '../../assets/Front.svg'
import SearchBallon from '../../assets/SearchBallon.svg'
import LoadingBallon from '../../assets/BallonLoading.svg'
import ErrorBallon from '../../assets/BallonError.svg'

import { Pokemon, defaultPokemon } from '../../domain'

import {ModalAddPokemon, ModalDataPokemon, SlotEmpty} from '../../components'

import './styles.css'
export const MapPokemon = () => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [showModalAddPokemon, setShowModalAddPokemon] = useState<boolean>(false);
  const [showModalDataPokemon, setShowModalDataPokemon] = useState<boolean>(false);
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon>(defaultPokemon);
  const [index, setIndex] = useState<number>(9999);
  const [typeAction, setTypeAction] = useState<string>('add');

  let bulbasaur: Pokemon = {
    id: 0,
    name: 'Bulbasaur',
    hp: 45,
    height: 0.7,
    weight: 6.9,
    types: [{name: 'PLANTA', color: '#67AF32'}, {name: 'VENENO', color: '#924990'}],
    habilities: ['OVERGROW', 'CLOROFILA'],
    statistics: {
      Defense: 92,
      Attack: 92,
      SpecialDefense: 121,
      SpecialAttack: 121,
      Speed: 85
    }
  }

  const action = () => {
    if(pokemons.length<=6){
      setTypeAction('search')
      setTimeout(() => {
        addPokemon()
        setTypeAction('add')
      }, 1000);
      return
    }
    if(pokemons.length>6){
      setTypeAction('error')
      return
    }
  }
  
  const removePokemon = (pokemon: Pokemon) => {
    setPokemons(pokemons.filter(p => p.id !== pokemon.id))
    handleCloseModal()
  }
  
  const addPokemon = () => {
    bulbasaur.id = pokemons.length+1;
    setPokemons([bulbasaur, ...pokemons])
  }

  const handleCloseModal = () => {
    setIndex(9999)
    if(showModalAddPokemon) {
      return setShowModalAddPokemon(!showModalAddPokemon);
    }
    return setShowModalDataPokemon(!showModalDataPokemon);
  }

  const handleOpenModal = (whoModal: string) => {
    setIndex(1)
    if(whoModal === 'add') {
      return setShowModalAddPokemon(!showModalAddPokemon);
    }
    return setShowModalDataPokemon(!showModalDataPokemon);
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
                <SlotEmpty onPress={()=>{setPokemonSelected(pokemon); handleOpenModal('data')}} color='#fff' borderColor='#00D68F'>
                  {<img src={ImageBulbasaur} alt='pokemon bulbasaur' style={{height: '9vh'}} />}
                </SlotEmpty>
              </div>
            )
          }))
        }

        <div>
          <SlotEmpty onPress={()=>handleOpenModal('add')} color='#FF3D71' borderColor='#DB2C66'>
            <img src={IconAdd} alt='icon add' />
          </SlotEmpty>
        </div>
      </div>

      <ModalAddPokemon show={showModalAddPokemon} onClose={handleCloseModal} />
      <ModalDataPokemon show={showModalDataPokemon} onClose={handleCloseModal} pokemon={pokemonSelected} removePokemon={removePokemon} />

        <button onClick={action} className='btn-ash' style={{zIndex: `${index}`}}>
          {typeAction === 'add' ? 
            (<img src={SearchBallon} alt='ballon' className='ash-ballon-search'  />) 
            : null || 
              (typeAction === 'search' ? 
                (<img src={LoadingBallon} alt='ballon' />) : 
                (<img src={ErrorBallon} alt='ballon' className='ash-ballon-search' />))}
          {/* <img src={SearchBallon} alt='ash' className='ash-ballon-search' /> */}
          <img src={ImageAsh} alt='ash' className='ash-image' />
        </button>
        
    </div>
  )
}