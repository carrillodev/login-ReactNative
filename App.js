import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import UserLayout from './src/UserLayout'

class login extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: '',
      pass: '',
      entrar: 0
    }
  }

  validar = ()=>{
    if(this.state.user == 'Felipe' && this.state.pass == '17231285'){
      this.setState({
        entrar: 1
      })
    }
  }

  render(){
    var {user} = this.state;
    var {pass} = this.state;
    return(
      <View style={styles.container}>
        {
          this.state.entrar == 0 
          ?
          <View>
            <Text style={styles.titulo}>Login de Usuario</Text>
            <TextInput onChangeText={(user) => this.setState({user})} placeholder="Usuario:" style={styles.input}>
            </TextInput>
            <TextInput onChangeText={(pass) => this.setState({pass})} placeholder="Contraseña:" style={styles.input}>
            </TextInput>
            <View style={styles.boton}>
              <Button onPress={this.validar} title="Entrar"></Button>
            </View>
          </View>
          :
          <UserLayout user={this.state.user} pass={this.state.pass}>
          </UserLayout>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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

export default login
