import * as React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

const image = { uri: "https://img.freepik.com/free-vector/layers-diagonal-lines-white-texture-background_23-2148428986.jpg?size=626&ext=jpg" };

function HomeScreen() {
    return (
      <View style={styles.container}>
        <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}>
            <Text style={styles.heading}>Welcome to the world of Pokémon</Text>
        </ImageBackground>
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
        margin: 20,
        color: 'black',
    },
    image: {
        flex: 1,
        justifyContent: "center"
    }
})