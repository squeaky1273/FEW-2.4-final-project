export const ADD_TO_TEAM = 'ADD_TO_TEAM'
export const REMOVE_FROM_TEAM = 'REMOVE_FROM_TEAM'
const initialState = []

const pokemonTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_TEAM:
      return [...state, action.payload]
    case REMOVE_FROM_TEAM:
      return state.filter(chosenPokemon => chosenPokemon.ID !== action.payload.id)
  }
  return state
}

export default pokemonTeamReducer