import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonForm from "../components/ButtonForm";
import LabeledInput from "../components/LabeledInput";

// Componente de Tela
export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Text style={styles.title}>Faça login em sua conta</Text>
        <View style={styles.form}>
          <LabeledInput
            label="Email"
            placeholder="Insira seu endereço de email"
            keyboardType="email-adress"
          />
          <LabeledInput
            label="Senha"
            placeholder="Insira sua senha"
            secureTextEntry={true}
          />
         <ButtonForm
          textButton="Entrar"
         />
        <TouchableOpacity style={styles.forget}> 
         <Text style={styles.forgetText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
    
        <View style={styles.footer}>
          <Text style={styles.footerText}>Ainda não tem conta?</Text>
          <TouchableOpacity> 
            <Text style={styles.footerLink}>Faça seu cadastro!</Text>
          </TouchableOpacity>
        </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700", // Define o peso da fonte como negrito forte
    textAlign: "center",
    color: "#333",
    marginBottom: 26,
  },
  forgetText: {
    color: "#00213D",
    fontSize: 13,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  forget: {
    marginTop: 14,
    alignSelf: "center", // Centraliza o botão dentro do container "view"
  },
  footer: {
    marginTop: 24,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 13,
    color: "#3A3A3A",
  },
  footerLink: {
    color: "#0E73E8",
    fontSize: 13,
    fontWeight: "700",
  },
})

