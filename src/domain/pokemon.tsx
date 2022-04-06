export interface Pokemon {
  id: string
  name: string
  hp: string
  height: number
  weight: number
}

export const defaultPokemon: Pokemon = {
  id: '',
  name: '',
  hp: '',
  height: 0,
  weight: 0
}