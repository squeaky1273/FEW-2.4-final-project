import { createStore } from 'redux'
import pokemonTeamReducer from './pokemonTeamReducer'

const store = createStore(pokemonTeamReducer)

export default store