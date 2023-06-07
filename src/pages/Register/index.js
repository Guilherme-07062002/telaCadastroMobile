import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text>Tela de Cadastro</Text>

      <View style={styles.form}>
        <View style={styles.inputField}>
          <Text>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
          ></TextInput>
        </View>

        <View style={styles.inputField}>
          <Text>Email: </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
          ></TextInput>
        </View>

        <View style={styles.inputField}>
          <Text>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
