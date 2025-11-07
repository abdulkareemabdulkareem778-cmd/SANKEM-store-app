import { Stack } from "expo-router";
import { WebView } from "react-native-webview";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: "https://abdulkareemabdulkareem778-cmd.github.io/SANKEM-store/" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
