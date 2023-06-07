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

      <StatusBar style="auto" />
    </View>
  );
}
