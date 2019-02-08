export const ADD_POKEMON = 'ADD_POKEMON'

export default function addPokemon(name){
  return {
    type: ADD_POKEMON, 
    name
  }
};
