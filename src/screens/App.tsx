import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>
        Realimenta
      </Text>

      <Text style={styles.subtitle}>
        Nosso projeto Demo Day!
      </Text>
    </View>
    </ScrollView>
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