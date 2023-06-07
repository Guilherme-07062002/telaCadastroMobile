import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 60,
    backgroundColor: "#E8DE5D",
  },
  title: {
    fontSize: 24,
  },
  form: {
    gap: 30,
    width: "60%",
  },
  inputField: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#000",
    backgroundColor: "#fff",
    opacity: 0.7,
    width: "80%",
    height: 40,
    padding: 5,
    paddingHorizontal: 10,
  },
  button: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#A5DB63",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 30,
  },
});

export default styles;
