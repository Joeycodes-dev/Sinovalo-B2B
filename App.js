import React from 'react';
import { StyleSheet, Text, View, ScrollView ,StatusBar} from 'react-native';
import Navigator from './routes/navigator';
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  
  return (
    <ScrollView>
     <StatusBar/>
      <PaperProvider>
        <View style={styles.container}>
          <Navigator />
        </View>

      </PaperProvider>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
