import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { globalStyles } from './theme/global'; 

//Tipos de icones de botões
import { Bell, Pencil, Trash2, ChevronLeft, ChevronRight, Send, } from 'lucide-react-native';

import { Button } from './components/button';
import { Input } from './components/input';
import { Checkbox } from './components/Checkbox';
import { IconButton } from './components/iconbuttons/IconButton'

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
      <Input placeholder="Digite seu e-mail" keyboardType="email-address"/>

    <Checkbox text = "Sim ou Não"
    checked={checked}
    onChange={setChecked}
      />
      <IconButton icon={Bell} onPress={() => console.log('Notificações')} />
      <IconButton icon={Pencil} onPress={() => console.log('Editar')} />
      <IconButton icon={Trash2} onPress={() => console.log('Lixeira')} />
      <IconButton icon={ChevronLeft} onPress={() => console.log('Seta esquerda')} />
      <IconButton icon={ChevronRight} onPress={() => console.log('Seta direita')} />
      <IconButton icon={Send} onPress={() => console.log('Enviar')} />
      </View> 
    </ScrollView>
  );
}

