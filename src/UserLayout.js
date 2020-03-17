import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function UserLayout(props){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Bienvenido!</Text>
            <Text style={styles.texto}>Usuario: {props.user}</Text>
            <Text style={styles.texto}>Contraseña: {props.password}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30
    },
    texto: {
        fontSize: 24,
        marginBottom: 20
    }
});