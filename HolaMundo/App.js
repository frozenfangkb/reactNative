import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Texto extends React.Component {
  render() {
    let { textoToMostrar } = this.props;

    return <Text>{textoToMostrar}</Text>;
  };
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto textoToMostrar="Hi there!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
