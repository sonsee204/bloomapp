import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.logo}>🌸</Text>
          <Text style={styles.brandName}>BloomBloom</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF5F7' }, // Màu hồng nhạt
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { fontSize: 80, marginBottom: 10 },
  brandName: { fontSize: 36, fontWeight: 'bold', color: '#FF87A0' },
  tagline: { fontSize: 18, color: '#A38088' },
});

export default App;