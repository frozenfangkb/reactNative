import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import { Location, Permissions } from 'expo';

export default class App extends React.Component {

  state = {
    location: null,
    errorMessage: null,
  };

  getLocation = async () => {

    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    Alert.alert('Permisos', 'status');

  };

  render() {
    return (
      <View style={ styles.container }>
        <Button
          title="Localizame"
          onPress={ this.getLocation }
        />
      </View>
    );
  };
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
