import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Realimenta
      </Text>

      <Text style={styles.subtitle}>
        Nosso projeto Demo Day!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#16A34A",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },
});