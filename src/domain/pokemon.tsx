export interface Pokemon {
  id: string
  name: string
  hp: number
  height: number
  weight: number
}

export const defaultPokemon: Pokemon = {
  id: '',
  name: '',
  hp: 0,
  height: 0,
  weight: 0
}