import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import FontAwesome, { Icons } from 'react-native-fontawesome';

function HomeScreen() {
    return (
      <View style={styles.container}>
          {/* <FontAwesome>{Icons.chevronLeft}</FontAwesome> */}
          <Text style={styles.heading}>Home!</Text>
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