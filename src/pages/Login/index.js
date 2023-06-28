import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import Api from "../../api";
import { useState } from "react";

export default function Login() {
  const api = new Api();
  const loginUser = () => {
    const data = {
      name: name,
      email: email,
      password: senha,
    };
    Alert.alert("Entrar", "Login realizado com sucesso");
    // const response = api.save(JSON.stringify(data))
    // console.log(data)
    // if (response !== null) {
    //   Alert.alert("Cadastro", "Operação realizada com sucesso");
    // }
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.form}>
        <View style={styles.inputField}>
          <Text>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </View>

        <View style={styles.inputField}>
          <Text>Email: </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>

        <View style={styles.inputField}>
          <Text>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
            onChangeText={(text) => setSenha(text)}
          ></TextInput>
        </View>

        <TouchableOpacity onPress={loginUser} style={styles.buttonRegister}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}