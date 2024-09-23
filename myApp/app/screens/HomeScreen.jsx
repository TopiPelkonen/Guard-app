import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { AuthContext } from "../components/AuthContext";

const HomeScreen = ({ navigation }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

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
          title="Rekisteröi"
          onPress={() => navigation.navigate("Rekisteröi")}
        />
      </View>
      {isLoggedIn ? (
        <View></View>
      ) : (
        <Text style={styles.container}>Kirjaudu sisään tai rekisteröidy</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingTop: 50,
  },
  button: {
    marginRight: 10,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between", // Evenly distribute buttons in the row
    alignItems: "center",
    width: "200px",
  },
});
export default HomeScreen;
