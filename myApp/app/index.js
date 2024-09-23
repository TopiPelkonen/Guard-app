import React from "react";
import MainNavigator from "./navigation/MainNavigator";
import AuthProvider from "./components/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <MainNavigator />
    </AuthProvider>
  );
}
