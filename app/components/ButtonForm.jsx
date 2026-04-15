import { Pressable, StyleSheet, Text } from "react-native";

// Declaração das constantes para estilização
const BG_BUTTON = "#00213D"; 
const TEXT_PRIMARY = "#FFFFFF"

// Exportação do componente de reuso
export default function ButtonForm({ textButton}) {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.title}>
                { textButton ? textButton : "Não informado"}
                
            </Text>
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: BG_BUTTON,
        borderRadius: 8,
        marginHorizontal: 20

    },
    title: {
        color: TEXT_PRIMARY,
        marginVertical: 2,
        textAlign: "center",
        paddingVertical: 7,

      
    }

})

