import { SafeAreaView, StyleSheet, Text } from "react-native";

// Constantes das cores para estilização
const TEXT_PRIMARY = "#6B6E71";
const COLOR_PRIMARY = "#0B3B60";
const COLOR_DETAIL = "#339CFF";
// Componente Funcional (Como se fosse o HTML)
export default function Index() {
  return (
    <SafeAreaView style={styles.bg}>
      <Text style={styles.texto}>
        Olá Mundo
      </Text>
    </SafeAreaView>


    // <View style={styles.bg}>
    //   <Text style={styles.texto}>
    //     Olá Mundo
    //   </Text>
    // </View>
  )
}
// Criação do stylesheet (como se fosse o css)
const styles = StyleSheet.create({
  bg: {
    backgroundColor: COLOR_DETAIL
  },
  texto: {
    color: TEXT_PRIMARY
  }
})