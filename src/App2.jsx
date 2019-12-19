import React from "react"
import { useColorScheme } from "react-native-appearance"
import { View } from "react-native"

function MyComponent() {
  let colorScheme = useColorScheme()
  if (colorScheme === "dark") {
    return <View style={{ backgroundColor: "#000", flex: 1 }} />
  } else {
    return <View style={{ backgroundColor: "#fff", flex: 1 }} />
  }
}

export default MyComponent
