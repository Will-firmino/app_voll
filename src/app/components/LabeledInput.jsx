import { StyleSheet } from "react-native";
import { View, Text, TextInput } from "react-native";

const INPUT_BG = '#F5F5F5';
const INPUT_BORDER = '#E8E8E8';
const LABEL_COLOR = '#36454F';

export default function LabeledInput({ label, ...rest }) {
    return (
        <View style={styles.wrapper}>

            {/* Se o label for passado, exiba o label. Se não, exiba não informado. */}
            <Text style={styles.label}>
                 { label ? label : "Não informado" } 
            </Text>

            <TextInput 
                style={styles.input}
                placeholderTextColor='#B5B5B5'
                {...rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',    // Faz o componente ocupar toda a largura disponível.
        marginBottom: 14, // Define o espaço abaixo do campo.
    },
    label: {
        marginBottom: 6, 
        color: LABEL_COLOR, // Cor do texto da label, utilizando const.
        fontSize: 14,       // Tamanho da fonte.
        fontWeight: 600,    // Peso da fonte (semi-negrito).
    },
    input: {
        backgroundColor: INPUT_BG, // Define a cor de fundo do input.
        borderRadius: 8,           // Arredonda os cantos do campo.
        paddingHorizontal: 14, // Define espaçamento interno esquerdo/direito.
        paddingVertical: 12,  // Define o espaçamento interno de cima/baixo.
        borderWidth: 1,       // Define a largura da borda.
        borderColor: INPUT_BORDER, // Define a cor da borda do input.
        shadowColor: '#000',     // Define a cor da borda da sombra.
        shadowOffset: { width: 1, height: 2}, // Define a posição da sombra.
        shadowOpacity: 0.08,                  // Define a transparência.
        shadowRadius:  6,                // Define o arredondamento da sombra.
        fontSize: 14,                    // Define tamanho da fonte.
        color: '#222',                 // Define a cor do texto.
    },
})

