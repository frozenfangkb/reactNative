import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.fetchUsers();
  }

  state = {
    loading: true,
    users: [],
  };

  fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const pre = await response.json();
    const users = pre.map( user => ({ ...user, key: String(user.id) }) );
    this.setState({
      loading: false,
      users,
    });
  }

  render() {
    const { loading, users } = this.state;

    const loadingText = (<Text>Loading...</Text>);

    const FlatListVar = (
      <FlatList 
        data={users}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    );

    return (
      <View style={styles.container}>
        {loading ? loadingText : FlatListVar}
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