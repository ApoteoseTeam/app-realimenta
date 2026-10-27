import React, { useRef, useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import { Checkbox } from '../components/Checkbox';
import { Input } from '../components/input';
import { Button } from '../components/button';
// import { Header } from '../components/header';

type Funcao = 'Nutricionista' | 'Gestor';
type Aba = 0 | 1;

export default function TelaAutenticacao() {
  const { width: larguraJanela } = useWindowDimensions();
  const paginasRef = useRef<React.ComponentRef<typeof ScrollView>>(null);

  const [largura, setLargura] = useState(larguraJanela);
  const [abaAtiva, setAbaAtiva] = useState<Aba>(0);

  // Estados do login
  const [emailLogin, setEmailLogin] = useState('');
  const [senhaLogin, setSenhaLogin] = useState('');
  const [termosLogin, setTermosLogin] = useState(false);

  // Estados do cadastro
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [escola, setEscola] = useState('');
  const [funcao, setFuncao] = useState<Funcao>('Nutricionista');
  const [senha, setSenha] = useState('');
  const [termosCadastro, setTermosCadastro] = useState(false);

  const [seletorAberto, setSeletorAberto] = useState(false);
  const [tentouCadastrar, setTentouCadastrar] = useState(false);

  const senhaInvalida = tentouCadastrar && senha.length < 8;

  function trocarAba(aba: Aba) {
    Keyboard.dismiss();
    setSeletorAberto(false);
    setAbaAtiva(aba);

    paginasRef.current?.scrollTo({
      x: largura * aba,
      animated: true,
    });
  }

  function handleLogin() {
    Keyboard.dismiss();

    Alert.alert(
      'Demonstração',
      'A integração de login ainda será implementada.'
    );
  }

  function handleCadastro() {
    Keyboard.dismiss();
    setTentouCadastrar(true);
    setSeletorAberto(false);

    if (!nome.trim() || !email.trim() || !escola.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos.');
      return;
    }

    if (senha.length < 8) {
      Alert.alert('Confira a senha', 'Use ao menos 8 caracteres.');
      return;
    }

    if (!termosCadastro) {
      Alert.alert(
        'Termos de uso',
        'Aceite os termos e a política de privacidade para continuar.'
      );
      return;
    }

    Alert.alert(
      'Demonstração',
      'Os campos foram preenchidos. A conta ainda não foi criada.'
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View
        style={styles.conteudo}
        onLayout={({ nativeEvent }) => {
          const novaLargura = nativeEvent.layout.width;

          if (novaLargura !== largura) {
            setLargura(novaLargura);

            paginasRef.current?.scrollTo({
              x: novaLargura * abaAtiva,
              animated: false,
            });
          }
        }}
      >
        {/* Substituir este bloco pelo Header quando estiver pronto. */}
        {/* <Header /> */}

        <View style={styles.cabecalho}>
          <Text style={styles.logo}>
            Re<Text style={styles.logoDestaque}>Alimenta</Text>
          </Text>

          <Text style={styles.subtitulo}>
            Mais controle. Menos desperdício.
          </Text>
        </View>

        <View style={styles.abas} accessibilityRole="tablist">
          {(['Entrar', 'Criar conta'] as const).map((titulo, indice) => {
            const aba = indice as Aba;
            const selecionada = abaAtiva === aba;

            return (
              <Pressable
                key={titulo}
                accessibilityRole="tab"
                accessibilityState={{ selected: selecionada }}
                onPress={() => trocarAba(aba)}
                style={[
                  styles.aba,
                  selecionada && styles.abaSelecionada,
                ]}
              >
                <Text
                  style={[
                    styles.textoAba,
                    selecionada && styles.textoAbaSelecionada,
                  ]}
                >
                  {titulo}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <ScrollView
          ref={paginasRef}
          style={styles.paginas}
          horizontal
          pagingEnabled
          directionalLockEnabled
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          scrollEventThrottle={16}
          onScrollBeginDrag={() => {
            Keyboard.dismiss();
            setSeletorAberto(false);
          }}
          onScroll={({ nativeEvent }) => {
            const indice = Math.round(
              nativeEvent.contentOffset.x / largura
            );

            setAbaAtiva(indice >= 1 ? 1 : 0);
          }}
        >
          {/* ENTRAR */}
          <ScrollView
            style={{ width: largura }}
            contentContainerStyle={styles.formulario}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.grupo}>
              <Text style={styles.label}>E-mail</Text>

              <Input
                accessibilityLabel="E-mail para entrar"
                style={styles.input}
                placeholder="voce@escola.gov.br"
                placeholderTextColor="#667B70"
                value={emailLogin}
                onChangeText={setEmailLogin}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.grupo}>
              <Text style={styles.label}>Senha</Text>

              <Input
                accessibilityLabel="Senha para entrar"
                style={styles.input}
                placeholder="••••••"
                placeholderTextColor="#667B70"
                value={senhaLogin}
                onChangeText={setSenhaLogin}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.termos}>
              <Checkbox
                text="Li e aceito os termos e a política de privacidade."
                checked={termosLogin}
                onChange={setTermosLogin}
              />
            </View>

            <Button
              label="Entrar"
              style={styles.botao}
              onPress={handleLogin}
            />

            <Text style={styles.nota}>
              Não coletamos dados de alunos. Só pesos por preparação.
            </Text>
          </ScrollView>

          {/* CADASTRO */}
          <ScrollView
            style={{ width: largura }}
            contentContainerStyle={styles.formulario}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.grupo}>
              <Text style={styles.label}>Nome completo</Text>

              <Input
                accessibilityLabel="Nome completo"
                style={styles.input}
                placeholder="Seu nome"
                placeholderTextColor="#667B70"
                value={nome}
                onChangeText={setNome}
                autoCapitalize="words"
              />
            </View>

            <View style={styles.grupo}>
              <Text style={styles.label}>E-mail</Text>

              <Input
                accessibilityLabel="E-mail para cadastro"
                style={styles.input}
                placeholder="voce@escola.gov.br"
                placeholderTextColor="#667B70"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.grupo}>
              <Text style={styles.label}>Escola ou rede</Text>

              <Input
                accessibilityLabel="Escola ou rede"
                style={styles.input}
                placeholder="Nome da escola ou da rede"
                placeholderTextColor="#667B70"
                value={escola}
                onChangeText={setEscola}
                autoCapitalize="sentences"
              />
            </View>

            <View style={styles.grupo}>
              <Text style={styles.label}>Função</Text>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Função: ${funcao}`}
                accessibilityState={{ expanded: seletorAberto }}
                onPress={() => {
                  Keyboard.dismiss();
                  setSeletorAberto((aberto) => !aberto);
                }}
                style={[styles.input, styles.seletor]}
              >
                <Text style={styles.textoFuncao}>{funcao}</Text>

                <Text style={styles.seta}>
                  {seletorAberto ? '⌃' : '⌄'}
                </Text>
              </Pressable>

              {seletorAberto && (
                <View style={styles.opcoes}>
                  {(['Nutricionista', 'Gestor'] as const).map(
                    (opcao) => (
                      <Pressable
                        key={opcao}
                        accessibilityRole="button"
                        accessibilityState={{
                          selected: funcao === opcao,
                        }}
                        onPress={() => {
                          setFuncao(opcao);
                          setSeletorAberto(false);
                        }}
                        style={[
                          styles.opcao,
                          funcao === opcao &&
                            styles.opcaoSelecionada,
                        ]}
                      >
                        <Text style={styles.textoFuncao}>
                          {opcao}
                        </Text>

                        {funcao === opcao && (
                          <Text style={styles.marcador}>✓</Text>
                        )}
                      </Pressable>
                    )
                  )}
                </View>
              )}
            </View>

            <View style={styles.grupoSenha}>
              <Text style={styles.label}>Senha</Text>

              <Input
                accessibilityLabel="Senha para cadastro"
                style={[
                  styles.input,
                  senhaInvalida && styles.inputErro,
                ]}
                placeholder="••••••"
                placeholderTextColor="#667B70"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
              />

              <Text
                style={[
                  styles.ajuda,
                  senhaInvalida && styles.textoErro,
                ]}
              >
                Use ao menos 8 caracteres.
              </Text>
            </View>

            <View style={styles.termos}>
              <Checkbox
                text="Li e aceito os termos e a política de privacidade."
                checked={termosCadastro}
                onChange={setTermosCadastro}
              />
            </View>

            <Button
              label="Criar conta"
              style={styles.botao}
              onPress={handleCadastro}
            />

            <Text style={styles.nota}>
              Não coletamos dados de alunos. Só pesos por preparação.
            </Text>
          </ScrollView>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  conteudo: {
    flex: 1,
  },
  cabecalho: {
    backgroundColor: '#E7F2D9',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 18,
    paddingHorizontal: 18,
  },
  logo: {
    fontSize: 30,
    fontWeight: '700',
    color: '#315E52',
    letterSpacing: -0.8,
  },
  logoDestaque: {
    color: '#3D821C',
  },
  subtitulo: {
    marginTop: 5,
    fontSize: 11,
    color: '#52665C',
    textAlign: 'center',
  },
  abas: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D7E4CC',
  },
  aba: {
    flex: 1,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  abaSelecionada: {
    borderBottomColor: '#315E52',
  },
  textoAba: {
    fontSize: 15,
    color: '#60746A',
  },
  textoAbaSelecionada: {
    color: '#315E52',
    fontWeight: '700',
  },
  paginas: {
    flex: 1,
  },
  formulario: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 32,
  },
  grupo: {
    marginBottom: 14,
  },
  grupoSenha: {
    marginBottom: 4,
  },
  label: {
    marginBottom: 6,
    fontSize: 12,
    fontWeight: '600',
    color: '#315E52',
  },
  input: {
    minHeight: 44,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#B4D1A5',
    backgroundColor: '#F6FAF2',
    color: '#263B32',
    fontSize: 14,
  },
  inputErro: {
    borderColor: '#C93B2B',
    backgroundColor: '#FFFFFF',
  },
  seletor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textoFuncao: {
    fontSize: 14,
    color: '#263B32',
  },
  seta: {
    fontSize: 22,
    color: '#315E52',
  },
  opcoes: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#B4D1A5',
    borderRadius: 9,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  opcao: {
    minHeight: 44,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  opcaoSelecionada: {
    backgroundColor: '#E7F2D9',
  },
  marcador: {
    color: '#315E52',
    fontWeight: '700',
  },
  ajuda: {
    marginTop: 6,
    fontSize: 11,
    color: '#60746A',
  },
  textoErro: {
    color: '#C93B2B',
  },
  termos: {
    marginTop: 10,
    marginBottom: 10,
  },
  botao: {
    minHeight: 46,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#315E52',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nota: {
    marginTop: 12,
    fontSize: 11,
    color: '#6C7D73',
    textAlign: 'center',
    lineHeight: 16,
  },
});