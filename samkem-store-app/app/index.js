import React from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: "https://abdulkareemabdulkareem778-cmd.github.io/SANKEM-store/" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
