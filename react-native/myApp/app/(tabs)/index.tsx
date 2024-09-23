import { Image, StyleSheet, Platform, Text, View, Button } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Valitse</Text>
      <View style={{ flex: 1 }}>
        <Button title="Tunnistaudu" />
        <Button title="Reitti" />
      </View>
    </View>
  );
}
