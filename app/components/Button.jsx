import { Pressable, StyleSheet, Text } from "react-native";

const BG_BUTTON = "#00213D";
const TEXT_PRIMARY = "#FFFFFF"

export default function Button() {
    return (
        <Pressable>
            <Text>
                ENTRAR
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: BG_BUTTON,
    },
    title: {
        color: TEXT_PRIMARY,
    }

})

