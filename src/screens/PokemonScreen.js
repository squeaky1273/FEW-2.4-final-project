import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


function PokemonScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Pokemon!</Text>
      </View>
    );
  }

export default PokemonScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    heading: {
        fontSize: 48,
        fontWeight: 'bold',
        margin: 20
    }
})