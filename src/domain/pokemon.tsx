export interface Pokemon {
  id: number
  name: string
  hp: number
  height: number
  weight: number
}

export const defaultPokemon: Pokemon = {
  id: 0,
  name: '',
  hp: 0,
  height: 0,
  weight: 0,
}