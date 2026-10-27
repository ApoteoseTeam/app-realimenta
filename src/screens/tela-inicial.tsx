import { StyleSheet, View, Text, Image } from 'react-native'

import { typography } from '../theme/typography'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'

import { Button } from '../components/button'

export default function TelaInicial() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/topdecoracao.png')}
                style={styles.topBlob}
                resizeMode="contain"
            />

            <Image
                source={require('../../assets/footergreen.png')}
                style={styles.bottomWave}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <View style={styles.headerGroup}>
                    <Text style={styles.title}>reali</Text>
                    <Text style={styles.subtitle}>Mais controle. Menos desperdício</Text>
                </View>

                <Text style={styles.description}>
                    Acompanhe e reduza o desperdício da merenda escolar. Dados que ajudam a construir um futuro mais sustentável.
                </Text>

                <View style={styles.buttonContainer}>
                    <Button label="Entrar" />
                    <Button label="Criar Conta" style={styles.buttonTwo} textStyle={styles.buttonTwoText} />
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerTextGroup}>
                        <Text style={styles.footerText}>
                            Juntos por uma alimentação mais consciente.
                        </Text>
                    </View>

                    <Image
                        source={require('../../assets/pratoimg.png')} 
                        style={styles.foodImage} 
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        position: 'relative', 
    },
    topBlob: {
        position: 'absolute',
        top: -80,
        left: -80,
        width: 300,
        height: 200,
    },
    bottomWave: {
        position: 'absolute',
        bottom: -160,
        left: '-20%',
        right: 0,
        height: 300, 
        width: '130',
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 20,
        zIndex: 1,
    },
    headerGroup: {
        alignItems: 'center',
    },
    title: {
        fontSize: 56,
        color: colors.primary,
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: typography.sizes.small,
        color: colors.textSecondary,
        fontWeight: '500',
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: typography.sizes.small,
        color: colors.textSecondary,
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 32,
        maxWidth: 310,
    },
    buttonContainer: {
        width: '100%',
        gap: 12,
    },
    buttonTwo: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTwoText: {
        color: colors.primary,
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    footerTextGroup: {
        flex: 1,
        paddingRight: 12,
    },
    footerText: {
        fontSize: 12,
        color: colors.textSecondary,
        lineHeight: 16,
        marginLeft: 20,
        marginBottom: 12
    },
    foodImage: {
        width: 160,
        height: 160,
        bottom: -10
    }
})