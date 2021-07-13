import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ImageBackground
} from 'react-native'
// import { Entypo } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_TEAM } from '../redux/pokemonTeamReducer'

const image = { uri: "https://img.freepik.com/free-vector/layers-diagonal-lines-white-texture-background_23-2148428986.jpg?size=626&ext=jpg" };

function Separator() {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}

function TeamScreen() {
    const capturedPokemon = useSelector(state => state)
    const dispatch = useDispatch()

    const removePokemonFromTeam = id =>
    dispatch({
        type: REMOVE_FROM_TEAM,
        payload: {id}
    })

    return (
        <View
        style={styles.container}>
            <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.heading}>Your Team</Text>
            {capturedPokemon.length !== 0 ? (
                <FlatList
                data={capturedPokemon}
                keyExtractor={(item) => item.name.toString()}
                ItemSeparatorComponent={() => Separator()}
                renderItem={({ item }) => (
                    <View style={styles.pokemonListContainer}>
                    <Image source={{ uri: item.image }} style={styles.thumbnail} />
                    <View style={styles.pokemonMetaContainer}>
                        <Text style={styles.pokemonName} numberOfLines={1}>
                        {item.name}
                        </Text>
                        <Text style={styles.pokemonType}>Type: {item.type}</Text>
                        <Text>Weakness:</Text>
                        <Text style={styles.pokemonWeakness}>Weakness: {item.weakness}</Text>
                        <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => removePokemonFromTeam(item.ID)}
                            style={styles.button}>
                            <Text style={styles.buttonText}> Remove </Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                )}
                />
            ) : (
                <View style={styles.emptyTeamContainer}>
                    <Text style={styles.emptyTeamMessage}>You have no pokemon on your team.</Text>
                    {/* <Entypo name="progress-empty" size={48} color="black" /> */}
                </View>
            )}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        fontSize: 36,
        fontWeight: 'bold',
        margin: 20,
        paddingTop: 50,
    },
    pokemonListContainer: {
        flexDirection: 'row',
        padding: 10
    },
    thumbnail: {
        width: 150,
        height: 150
    },
    pokemonMetaContainer: {
        padding: 5,
        paddingLeft: 10
    },
    pokemonName: {
        fontSize: 22,
        fontWeight: '400'
    },
    pokemonType: {
        fontSize: 13,
        fontWeight: '200'
    },
    pokemonWeakness: {
        fontSize: 12,
        fontWeight: '200',
        flexWrap: 'wrap'
    },
    buttonContainer: {
        position: 'absolute',
        top: 110,
        left: 10
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#B22222',
        padding: 5
    },
    buttonText: {
        fontSize: 22,
        color: '#fff'
    },
    emptyTeamContainer: {
        marginTop: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyTeamMessage: {
        fontSize: 18
    },
    image: {
        flex: 1,
        justifyContent: "center"
    }
})

export default TeamScreen