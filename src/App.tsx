import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { globalStyles } from './theme/global'; 

export default function App() {
  return (
    <ScrollView>
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>
        Realimenta
      </Text>

      <Text style={globalStyles.subtitle}>
        Nosso projeto Demo Day!
      </Text>
    </View>
    </ScrollView>
  );
}

