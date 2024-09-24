import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passcode, setPasscode] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Salasanat eivät ole samat");
      return;
    }
    //asdasd
    const userData = {
      name,
      password,
      passcode,
    };
    try {
      const response = await fetch("http://localhost:8000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (response.ok) {
        navigation.navigate("Kirjaudu");
      }
    } catch (error) {
      console.error(error);
    }
  };
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
          <TextInput
            style={styles.input}
            placeholder="Nimi"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Salasana"
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Salasana uudestaan"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="PIN koodi"
            value={passcode}
            onChangeText={setPasscode}
          />
          <Button title="Rekisteröi" onPress={handleRegister} />
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
    width: "300px",
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
    width: "150px",
  },
});

export default RegisterScreen;
