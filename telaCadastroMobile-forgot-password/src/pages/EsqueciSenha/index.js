import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import Api from "../../api";
import { useState } from "react";

export default function EsqueciSenha() {
  //   const api = new Api();
  const RenewPassword = async () => {
    Alert.alert("Renovar Senha", "Enviaremos um código para seu email");
  };
  // Futuramente implementar envio para email

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.form}>
        <View style={styles.inputField}>
          <Text>Email: </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>

        <View style={styles.inputField}>
          <Text>Nova senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua nova senha"
            onChangeText={(text) => setSenha(text)}
          ></TextInput>
        </View>

        <TouchableOpacity onPress={RenewPassword} style={styles.buttonRegister}>
          <Text>Enviar código para meu email</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
