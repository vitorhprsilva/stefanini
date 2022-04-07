export interface Type {
  name: string
  color: string
}

export interface Statistic {
  Defense: number
  Attack: number
  SpecialDefense: number
  SpecialAttack: number
  Speed: number
}

export interface Pokemon {
  id: number
  name: string
  hp: number
  height: number
  weight: number
  types: Type[]
  habilities: string[]
  statistics: Statistic
}

export const defaultPokemon: Pokemon = {
  id: 0,
  name: '',
  hp: 0,
  height: 0,
  weight: 0,
  types: [{name: '', color: ''}, {name: '', color: ''}],
  habilities: [],
  statistics: {
    Defense: 0,
    Attack: 0,
    SpecialDefense: 0,
    SpecialAttack: 0,
    Speed: 0
  }
}