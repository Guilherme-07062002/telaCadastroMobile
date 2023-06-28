import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import Api from "../../api";
import { useState } from "react";

export default function Register() {
  const api = new Api()
  const registerUser = () =>{
    const data = {
      name: name,
      email: email,
      password: senha
    }
    const response = api.save(JSON.stringify(data))
    console.log(data)
    if (response !== null) {
      Alert.alert("Cadastro", "Operação realizada com sucesso");
    }

  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Cadastro</Text>

      <View style={styles.form}>
        <View style={styles.inputField}>
          <Text>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            onChangeText={text => setName(text)}
          ></TextInput>
        </View>

        <View style={styles.inputField}>
          <Text>Email: </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            onChangeText={text => setEmail(text)}
          ></TextInput>
        </View>

        <View style={styles.inputField}>
          <Text>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
            onChangeText={text => setSenha(text)}
          ></TextInput>
        </View>

        <TouchableOpacity onPress={registerUser} style={styles.buttonRegister}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
