import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

function TeamIcon() {
  const navigation = useNavigation()
  const capturedPokemon = useSelector(state => state)

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Team')}
      style={styles.button}>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{capturedPokemon.length}</Text>
      </View>
      <AntDesign name="team" size={24} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10
  },
  itemCountContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default TeamIcon
