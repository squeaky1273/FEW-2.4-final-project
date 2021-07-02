import React from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { useDispatch } from 'react-redux'
import { pokemon } from '../utils/data'
import { ADD_TO_TEAM } from '../redux/pokemonTeamReducer'

function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}

function PokemonScreen() {
  const dispatch = useDispatch()
  const addPokemonToTeam = item => dispatch({ type: ADD_TO_TEAM, payload: item })
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Wild Pokemon</Text>
      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => Separator()}
        renderItem={({ item }) => (
          <View style={styles.pokemonListContainer}>
            <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
            <View>
              <Text style={styles.pokemonName} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.pokemonType}>{item.type}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                   onPress={() => addPokemonToTeam(item)} style={styles.button}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Add +</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default PokemonScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    margin: 20,
    paddingTop: 50
  },
  pokemonListContainer: {
    flexDirection: 'row',
    padding: 10
  },
  thumbnail: {
    width: 100,
    height: 150
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10
  },
  pokemonName: {
    fontSize: 22,
    fontWeight: '400'
  },
  pokemonType: {
    fontSize: 18,
    fontWeight: '200'
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10
  },
  button: {
    borderRadius: 8,
    backgroundColor: 'green',
    padding: 5
  },
  buttonText: {
    fontSize: 22,
    color: '#fff'
  }
})