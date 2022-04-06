export interface Pokemon {
  id: string
  name: string
  hp: number
  height: number
  weight: number
  value: number
}

export const defaultPokemon: Pokemon = {
  id: '',
  name: '',
  hp: 0,
  height: 0,
  weight: 0,
  value: 0,
}

export const bulbasaurPokemon: Pokemon = {
  id: '1',
  name: 'Bulbasaur',
  hp: 45,
  height: 0.7,
  weight: 6.9,
  value: 1,
}