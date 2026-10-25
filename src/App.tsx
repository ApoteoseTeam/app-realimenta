import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { globalStyles } from './theme/global'; 
import {Button} from './components/button'
import { Checkbox } from './components/Checkbox';
import { useState } from 'react';
export default function App() {
  const [checked, setChecked] = useState(false);
  return (
    <ScrollView>
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>
        Realimenta
      </Text>

      <Text style={globalStyles.subtitle}>
        Nosso projeto Demo Day!
      </Text>

      <Button label = "Cadastro"/>
    <Checkbox text = "Sim ou Não"
    checked={checked}
    onChange={setChecked}
      />
      </View>
    </ScrollView>
  );
}

