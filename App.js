import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class login extends Component{

  constructor(props){
    super(props);
    this.state = {
      user: '',
      pass: '',
      entrar: 0
    }
  }

  render(){
    var {user} = this.state;
    var {pass} = this.state;
    return(
      <View style = {styles.container}>
        <View>
          <Text style={styles.titulo}>Login de Usuario</Text>
          <TextInput onChangeText={(user) => this.setState({user})} placeholder="Usuario:" style={styles.input}></TextInput>
          <TextInput onChangeText={(pass) => this.setState({pass})} placeholder="Contraseña:" style={styles.input}></TextInput>
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
