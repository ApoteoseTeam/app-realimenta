import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Platform } from 'react-native';
import {
  Undo2,
  Settings,
  Pencil,
  CircleUser,
  Phone,
  MapPin,
  Lock,
  House,
  ClipboardList,
  LayoutDashboard,
  type LucideIcon,
} from 'lucide-react-native';

const FONT = 'Arial';
const SERIF = Platform.select({ ios: 'Georgia', default: 'serif' });

const ABAS: { nome: string; icone: LucideIcon; ativa?: boolean }[] = [
  { nome: 'Home', icone: House },
  { nome: 'Formulário', icone: ClipboardList },
  { nome: 'Dashboard', icone: LayoutDashboard },
  { nome: 'Perfil', icone: CircleUser, ativa: true },
];

const Linha = ({ icone: Icone, texto }: { icone: LucideIcon; texto: string }) => (
  <View style={styles.linha}>
    <Icone size={22} color="#000" />
    <Text style={styles.linhaTexto}>{texto}</Text>
  </View>
);

export default function PerfilUsuario() {
  return (
    <View style={styles.container}>
      <View style={styles.fundoVerde} />

      <View style={styles.topo}>
        <Pressable hitSlop={12}>
          <Undo2 size={24} color="#FFF" />
        </Pressable>
        <Text style={styles.titulo}>MEU PERFIL</Text>
        <Pressable hitSlop={12}>
          <Settings size={24} color="#FFF" />
        </Pressable>
      </View>

      <View style={styles.avatarArea}>
        <View style={styles.avatarBorda}>
          <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        </View>
        <Pressable style={styles.editar}>
          <Pencil size={18} color="#FFF" />
        </Pressable>
      </View>

      <Text style={styles.nome}>Leticia Neves Eduardo</Text>
      <Text style={styles.cargo}>Nutricionista</Text>

      <View style={styles.conteudo}>
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Dados pessoais</Text>
          <Linha icone={CircleUser} texto="leticia@gmail.com" />
          <Linha icone={Phone} texto="(11) 98765-4321" />
          <Linha icone={MapPin} texto="Escola Municipal Novo Horizonte" />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Minha conta</Text>
          <Linha icone={Settings} texto="Editar perfil" />
          <Linha icone={Lock} texto="Alterar Senha" />
        </View>

        <Pressable style={styles.botaoSair}>
          <Text style={styles.cardTitulo}>Sair da conta</Text>
        </Pressable>
      </View>

      <View style={styles.abas}>
        {ABAS.map(({ nome, icone: Icone, ativa }) => (
          <Pressable key={nome} style={styles.aba}>
            <Icone size={26} color="#000" strokeWidth={ativa ? 2.6 : 2} />
            <Text style={styles.abaTexto}>{nome}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  fundoVerde: {
    position: 'absolute',
    left: '-25%',
    width: '150%',
    height: 230,
    backgroundColor: '#3E6B5B',
    borderBottomLeftRadius: 400,
    borderBottomRightRadius: 400,
  },

  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 14,
  },
  titulo: {
    fontFamily: FONT,
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  avatarArea: {
    alignSelf: 'center',
    marginTop: 20,
  },
  avatarBorda: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 6,
    borderColor: '#000000',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  editar: {
    position: 'absolute',
    right: -4,
    bottom: -2,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#3E6B5B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nome: {
    fontFamily: SERIF,
    fontSize: 17,
    color: '#000000',
    textAlign: 'center',
    marginTop: 16,
  },
  cargo: {
    fontFamily: SERIF,
    fontSize: 11,
    color: '#000000',
    textAlign: 'center',
    marginTop: 4,
  },

  conteudo: {
    paddingHorizontal: 40,
    marginTop: 32,
    gap: 14,
  },
  card: {
    backgroundColor: '#D9D9D9',
    borderWidth: 1.5,
    borderColor: '#7FB236',
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 14,
    gap: 14,
  },
  cardTitulo: {
    fontFamily: FONT,
    fontSize: 13,
    fontWeight: '700',
    color: '#000000',
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  linhaTexto: {
    fontFamily: FONT,
    fontSize: 12,
    color: '#000000',
    flexShrink: 1,
  },
  botaoSair: {
    backgroundColor: '#D9D9D9',
    borderWidth: 1.5,
    borderColor: '#7FB236',
    borderRadius: 12,
    marginTop: 18,
    paddingVertical: 4,
    alignItems: 'center',
  },

  abas: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 24,
    backgroundColor: '#E4EFDA',
  },
  aba: {
    alignItems: 'center',
    gap: 2,
  },
  abaTexto: {
    fontFamily: FONT,
    fontSize: 10,
    fontWeight: '700',
    color: '#000000',
  },
});