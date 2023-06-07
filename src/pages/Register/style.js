import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 60,
  },
  form: {
    gap: 30,
    width: '60%'
  },
  inputField:{
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  },
  input: {
    borderColor: 'black',
    height: 30,
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  }
});

export default styles;
