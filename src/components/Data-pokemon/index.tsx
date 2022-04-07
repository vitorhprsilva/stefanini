import React, {useEffect, useState} from 'react'
import { Pokemon } from '../../domain'

import { SlotEmpty } from '../slot-empty'
import ImageBulbasaur from '../../assets/imageBulbasaur.png'
import IconPen from '../../assets/IconPen.svg'
import IconClose from '../../assets/IconClose.svg'
import IconCorrect from '../../assets/IconCorrect.svg'
import IconShield from '../../assets/IconShield.svg'
import IconSword from '../../assets/IconSword.svg'
import IconSpeed from '../../assets/IconSpeed.svg'

import './styles.css'

type modalProps = {
  show: boolean
  onClose: () => void
  pokemon: Pokemon
  removePokemon: (pokemon: Pokemon) => void
}

export const ModalDataPokemon = ({show, onClose, pokemon, removePokemon}: modalProps) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>(pokemon.name)
  const [nameEdit, setNameEdit] = useState<string>('')

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
            {edit ? 
              (
                <>
                  <input className='inputs' type='text' placeholder='Nome' value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} />
                  <button className='btn-action' onClick={()=>{setEdit(false); setName(nameEdit);}}>
                    <img src={IconCorrect} alt='confirm' style={{height: '25%'}} />
                  </button>
                  <button className='btn-action' onClick={()=>{setEdit(false); setNameEdit(name);}}>
                    <img src={IconClose} alt='cancel' style={{height: '25%'}} />
                  </button>
                </>
              ) : 
              (
                <>
                  <label> {name==='' ? pokemon.name : name} </label> 
                  <button className='btn-edit' onClick={()=>{setEdit(true); setNameEdit(name==='' ? pokemon.name : name)}}>
                    <img src={IconPen} alt='edit' />
                  </button>
                </>
              )
            }
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

          <div className="div">
              <div className="div__content">
                  ESTATÍSTICAS
              </div>
              <div className="div__separator"></div>
          </div>

          <div className='div-statistics'>
            <div className='div-statistics-content'>
              <div>
                <label className='label-inputs'>
                  <img src={IconShield} alt='shield' style={{height: 12, marginRight: 5}} />
                  DEFESA
                </label>
              </div>
              <label>{pokemon.statistics.Defense}</label>
            </div>

            <div className='div-statistics-content'>
              <div>
                <label className='label-inputs'>
                  <img src={IconSword} alt='sword' style={{height: 12, marginRight: 5}} />
                  ATAQUE
                </label>
              </div>
              <label>{pokemon.statistics.Attack}</label>
            </div>

            <div className='div-statistics-content'>
              <div>
                <label className='label-inputs'>
                  <img src={IconShield} alt='shield' style={{height: 12, marginRight: 5}} />
                  DEFESA ESPECIAL
                </label>
              </div>
              <label>{pokemon.statistics.SpecialDefense}</label>
            </div>

            <div className='div-statistics-content'>
              <div>
                <label className='label-inputs'>
                  <img src={IconSword} alt='sword' style={{height: 12, marginRight: 5}} />
                  ATAQUE ESPECIAL
                </label>
              </div>
              <label>{pokemon.statistics.SpecialAttack}</label>
            </div>

            <div className='div-statistics-content'>
              <div>
                <label className='label-inputs'>
                  <img src={IconSpeed} alt='speed' style={{height: 12, marginRight: 5}} />
                  VELOCIDADE
                </label>
              </div>
              <label>{pokemon.statistics.Speed}</label>
            </div>
          </div>

          <button onClick={() => removePokemon(pokemon)} className='btn-remove-pokemon' >LIBERAR POKEMON</button>

        </div>        
      </div>
    </div>
  )
}