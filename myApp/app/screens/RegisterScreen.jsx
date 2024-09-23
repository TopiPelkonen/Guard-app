import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Button
          style={styles.button}
          title="Kirjaudu"
          onPress={() => navigation.navigate("Kirjaudu")}
        />
        <Button
          style={styles.button}
          title="Koti"
          onPress={() => navigation.navigate("Koti")}
        />
      </View>

      <View style={styles.authentication}>
        <View style={styles.authContainer}>
          <Text style={styles.title}>Käyttäjän rekisteröinti</Text>

          <TextInput style={styles.input} placeholder="Nimi" />
          <TextInput style={styles.input} placeholder="Salasana" />
          <TextInput style={styles.input} placeholder="Salasana uudestaan" />
          <TextInput style={styles.input} placeholder="PIN koodi" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingTop: 50,
  },
  authentication: {
    width: "30%",
    justifyContent: "flex-start",
    padding: 20,
  },
  authContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: "100%",
  },
  button: {
    marginRight: 10,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between", // Evenly distribute buttons in the row
    alignItems: "center",
    width: "11%",
  },
});

export default RegisterScreen;
