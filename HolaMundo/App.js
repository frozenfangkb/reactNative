import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Texto extends React.Component {
  render() {
    let { textoToMostrar } = this.props;

    return <Text>{textoToMostrar}</Text>;
  };
}

export default class App extends React.Component {

  state = {
    text: "",
  };

  handleChange = text => {
    this.setState({ text });
  }

  render() {
    return (
      <View style={styles.container}>
        <Texto textoToMostrar="Hi there!" />
        <TextInput 
          placeholder="Tell me something"
          onChangeText={this.handleChange}
        />
        <Texto textoToMostrar={this.state.text} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
