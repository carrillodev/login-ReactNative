import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class login extends Component{
  render(){
    return(
      <View style = {styles.container}>
        <View>
          <Text style={styles.titulo}>Login de Usuario</Text>
          <TextInput placeholder="Usuario:" style={styles.input}></TextInput>
          <TextInput placeholder="Contraseña:" style={styles.input}></TextInput>
          <View style={styles.boton}>
            <Button title="Entrar"></Button>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },
  boton: {
    marginTop: 20,
    borderRadius: 5
  }
});

export default login;
