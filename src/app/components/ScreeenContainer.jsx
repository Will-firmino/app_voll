import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenContainer({ dark = false}) {
  return (
    <SafeAreaView
      style={[ styles.safe, dark && styles.safeDark ]}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <KeyboardAvoidingView>
        
      </KeyboardAvoidingView>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  safe: {},
  safeDark: {},
  flex:{},
  scroll:{},
  inner:{},
})
