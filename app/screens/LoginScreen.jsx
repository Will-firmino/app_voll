import { ScrollView, View } from "react-native";
import LabeledInput from "../components/LabeledInput";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
    return(
        <SafeAreaView>
            <ScrollView>
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
            </ScrollView>
        </SafeAreaView>
    )
}

