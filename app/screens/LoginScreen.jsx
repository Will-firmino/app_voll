import { View, Text, TextInput } from "react-native";
import LabeledInput from "../components/LabeledInput";

export default function LoginScreen() {
    return(
        <View>
            <LabeledInput label={Nome} />
            <LabeledInput label={Email}/>
            <LabeledInput label={Senha}/>
        </View>
    )
}