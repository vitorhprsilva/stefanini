import React, {useEffect, useState} from 'react'

import { SlotEmpty } from '../slot-empty'
import IconCamera from '../../assets/IconCam.svg'
import IconAddCam from '../../assets/IconAddCam.svg'
import IconShield from '../../assets/IconShield.svg'
import IconSword from '../../assets/IconSword.svg'
import IconSpeed from '../../assets/IconSpeed.svg'


import './styles.css'

type modalProps = {
  show: boolean
  onClose: () => void
}

export const ModalAddPokemon = ({show, onClose}: modalProps) => {

  const tiposPokemons = ['Água', 'Fogo', 'Terra', 'Trovão']
  
  const [name, setName] = useState<string>('');
  const [hp, setHp] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [tipo, setTipo] = useState<string>('Selecione o(s) tipo(s)');
  const [defense, setDefense] = useState<number>(0);
  const [attack, setAttack] = useState<number>(0);
  const [especialDefense, setEspecialDefense] = useState<number>(0);
  const [especialAttack, setEspecialAttack] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(0);
  
  useEffect(() => {
    if(hp<0) setHp(0);
    if(peso<0) setPeso(0);
    if(altura<0) setAltura(0);
  }, [hp, peso, altura])

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
            <img src={IconCamera} alt='add pokemon' style={{height: '9%'}} />
            <img src={IconAddCam} alt='add pokemon' style={{height: '40%', position: 'absolute', bottom: -8, right: -15}} />
          </SlotEmpty>

          <div className='div-inputs'>
            <label className='label-inputs'>NOME</label>
            <input className='inputs' type='text' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className='div-inputs'>
            <label className='label-inputs'>HP</label>
            <div className="container">
              <input type="text" className="container__input" value={hp} onChange={(e)=>setHp(Number(e.target.value))} />

              <div className="container__buttons">
                <button className="container__button" onClick={()=>{setHp(hp+1)}}>
                  ▲
                </button>

                <button className="container__button" onClick={()=>{setHp(hp-1)}}>
                  ▼
                </button>
              </div>
            </div>
          </div>

          <div className='div-inputs'>
            <label className='label-inputs'>PESO</label>
            <div className="container">
              <input type="text" className="container__input" value={peso} onChange={(e)=>setPeso(Number(e.target.value))} />

              <label className='information-input'>Kg</label>

              <div className="container__buttons">
                <button className="container__button" onClick={()=>{setPeso(peso+1)}}>
                  ▲
                </button>

                <button className="container__button" onClick={()=>{setPeso(peso-1)}}>
                  ▼
                </button>
              </div>
            </div>
          </div>

          <div className='div-inputs'>
            <label className='label-inputs'>ALTURA</label>
            <div className="container">
              <input type="text" className="container__input" value={altura} onChange={(e)=>setAltura(Number(e.target.value))} />

              <label className='information-input'>Cm</label>

              <div className="container__buttons">
                <button className="container__button" onClick={()=>{setAltura(altura+1)}}>
                  ▲
                </button>

                <button className="container__button" onClick={()=>{setAltura(altura-1)}}>
                  ▼
                </button>
              </div>
            </div>
          </div>

          <div className="div">
              <div className="div__content">
                  TIPO
              </div>
              <div className="div__separator"></div>
          </div>


          <div className='div-inputs'>
            <div className="dropdown">
              {tipo}
              <button className='btn-dropdown'>▼</button>

              <div className="dropdown__content">
                {tiposPokemons.map((tipo, index) => (<li key={index} onClick={()=>setTipo(tipo)}>{tipo}</li>))}
              </div>
            </div> 
          </div>

          <div className="div">
              <div className="div__content">
                  ESTATÍSTICAS
              </div>
              <div className="div__separator"></div>
          </div>

          <div className='div-inputs'>
            <label className='label-inputs'><img src={IconShield} alt='shield' style={{height: 12, marginRight: 5}} />DEFESA</label>
            <div className="container">
              <input type="text" className="container__input" value={defense} onChange={(e)=>setDefense(Number(e.target.value))} />

              <div className="container__buttons">
                <button className="container__button" onClick={()=>{setDefense(defense+1)}}>
                  ▲
                </button>

                <button className="container__button" onClick={()=>{setDefense(defense-1)}}>
                  ▼
                </button>
              </div>
            </div>
          </div>

          <div className='div-inputs'>
            <label className='label-inputs'><img src={IconSword} alt='sword' style={{height: 12, marginRight: 5}} />ATAQUE</label>
            <div className="container">
              <input type="text" className="container__input" value={attack} onChange={(e)=>setAttack(Number(e.target.value))} />

              <div className="container__buttons">
                <button className="container__button" onClick={()=>{setAttack(attack+1)}}>
                  ▲
                </button>

                <button className="container__button" onClick={()=>{setAttack(attack-1)}}>
                  ▼
                </button>
              </div>
            </div>
          </div>

          <div className='div-inputs'>
            <label className='label-inputs'><img src={IconShield} alt='shield' style={{height: 12, marginRight: 5}} />DEFESA ESPECIAL</label>
            <div className="container">
              <input type="text" className="container__input" value={especialDefense} onChange={(e)=>setEspecialDefense(Number(e.target.value))} />

              <div className="container__buttons">
                <button className="container__button" onClick={()=>{setEspecialDefense(especialDefense+1)}}>
                  ▲
                </button>

                <button className="container__button" onClick={()=>{setEspecialDefense(especialDefense-1)}}>
                  ▼
                </button>
              </div>
            </div>
          </div>

          <div className='div-inputs'>
            <label className='label-inputs'><img src={IconSword} alt='sword' style={{height: 12, marginRight: 5}} />ATAQUE ESPECIAL</label>
            <div className="container">
              <input type="text" className="container__input" value={especialAttack} onChange={(e)=>setEspecialAttack(Number(e.target.value))} />

              <div className="container__buttons">
                <button className="container__button" onClick={()=>{setEspecialAttack(especialAttack+1)}}>
                  ▲
                </button>

                <button className="container__button" onClick={()=>{setEspecialAttack(especialAttack-1)}}>
                  ▼
                </button>
              </div>
            </div>
          </div>

          <div className='div-inputs'>
            <label className='label-inputs'><img src={IconSpeed} alt='speed' style={{height: 12, marginRight: 5}} />VELOCIDADE</label>
            <div className="container">
              <input type="text" className="container__input" value={speed} onChange={(e)=>setSpeed(Number(e.target.value))} />

              <div className="container__buttons">
                <button className="container__button" onClick={()=>{setSpeed(speed+1)}}>
                  ▲
                </button>

                <button className="container__button" onClick={()=>{setSpeed(speed-1)}}>
                  ▼
                </button>
              </div>
            </div>
          </div>


          <div className="div-inputs">
            <button onClick={()=>{}} className='btn-add-pokemon' >CRIAR POKEMON</button>
          </div>

        </div>
      </div>
    </div>
  )
}