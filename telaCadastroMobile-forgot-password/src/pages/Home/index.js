import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Cadastro");
        }}
        style={styles.button}
      >
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={styles.button}
      >
        <Text>Login</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
