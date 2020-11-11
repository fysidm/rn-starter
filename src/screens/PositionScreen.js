// Demo of Flex Box
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    position: 'absolute'
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 4
  }
});

export default BoxScreen;
