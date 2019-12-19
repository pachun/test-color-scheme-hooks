import React from "react"
import { AppearanceProvider } from "react-native-appearance"
import { AppState, StyleSheet, Text, View } from "react-native"
import App2 from "./src/App2"

const App = () => {
  return (
    <AppearanceProvider>
      <App2 />
    </AppearanceProvider>
  )
}

export default App
