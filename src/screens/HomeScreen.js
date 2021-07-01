import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function HomeScreen() {
    return (
      <View style={styles.container}>
          <Text style={styles.heading}>Welcome to the world of Pokemon</Text>
          <Text>You gotta catch em all, so get to it!</Text>
      </View>
    );
  }

export default HomeScreen

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