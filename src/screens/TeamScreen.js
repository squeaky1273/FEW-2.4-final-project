import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import FontAwesome, { Icons } from 'react-native-fontawesome';

function TeamScreen() {
    return (
      <View style={styles.container}>
          {/* <FontAwesome>{Icons.chevronLeft}</FontAwesome> */}
          <Text style={styles.heading}>Team!</Text>
      </View>
    );
  }

export default TeamScreen

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