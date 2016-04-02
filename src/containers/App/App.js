import React, {
  Component, View, Text, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to Arm Breaker! </Text>
      </View>
    );
  }
}
