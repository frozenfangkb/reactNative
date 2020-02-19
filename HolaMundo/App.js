import React from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    modalStatus: false
  }

  toggleModal = () => {
    this.setState( prevState => {
      return {
        modalStatus: !prevState.modalStatus,
      }
    } );
  }

  render() {

    return (
      <View style={styles.container}>
        <Modal visible={this.state.modalStatus}>
          <View style={styles.container}>
            <Button 
              title="Cerrar modal"
              onPress={this.toggleModal}
            />
          </View>
        </Modal>
        <Button
          title="Abrir modal"
          onPress={this.toggleModal}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
  }
});