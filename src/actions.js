export const FETCH_POKEMON = 'FETCH_POKEMON'

export function selectPokemon(pokemon) {
  return {
    type: SELECT_POKEMON,
    pokemon
  }
}

function fetchPokemon(pokemon) {
  return dispatch => {
    dispatch(requestPosts(pokemon))
    return fetch('')
      .then(response => response.json())
      .then(json => dispatch(receivePosts(pokemon, json)))
  }
}
