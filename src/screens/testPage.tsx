import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { globalStyles } from '../theme/global';

// Ícones
import {
  Bell,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Send,
} from 'lucide-react-native';

// Componentes
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Checkbox } from '../components/Checkbox';
import { IconButton } from '../components/iconbuttons/IconButton';
import { Logo } from '../components/Logo';
import { Select } from '../components/select/Select';

export default function testPage() {
  const [checked, setChecked] = useState(false);
  const [categoria, setCategoria] = useState('');

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>
          Essa Página é para testar componentes criados
        </Text>

        <Text style={globalStyles.subtitle}>
          Nosso projeto Demo Day!
        </Text>

        <Text style={globalStyles.title}>Botão:</Text>
        <Button label="Cadastro" />

        <Text style={globalStyles.title}>Input:</Text>
        <Input
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
        />

        <Text style={globalStyles.title}>Checkbox:</Text>
        <Checkbox
          text="Sim ou Não"
          checked={checked}
          onChange={setChecked}
        />

        <Text style={globalStyles.title}>IconButtons:</Text>

        <IconButton
          icon={Bell}
          onPress={() => console.log('Notificações')}
        />

        <IconButton
          icon={Pencil}
          onPress={() => console.log('Editar')}
        />

        <IconButton
          icon={Trash2}
          onPress={() => console.log('Lixeira')}
        />

        <IconButton
          icon={ChevronLeft}
          onPress={() => console.log('Seta esquerda')}
        />

        <IconButton
          icon={ChevronRight}
          onPress={() => console.log('Seta direita')}
        />

        <IconButton
          icon={Send}
          onPress={() => console.log('Enviar')}
        />

        <Text style={globalStyles.title}>Logo:</Text>
        <Logo />

        <Text style={globalStyles.title}>Select:</Text>

        <Select
          label="Categoria do alimento"
          options={[
            'Grãos e cereais',
            'Frutas',
            'Hortaliças',
            'Carnes',
          ]}
          value={categoria}
          onChange={setCategoria}
        />

        <Text style={globalStyles.subtitle}>
          Selecionado: {categoria || 'Nenhum'}
        </Text>
      </View>
    </ScrollView>
  );
}