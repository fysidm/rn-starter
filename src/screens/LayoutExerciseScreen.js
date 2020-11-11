import React from 'react';
import { View, StyleSheet } from 'react-native';

const LayoutExerciseScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoParentStyle}>
        <View style={styles.viewTwoStyle} />
      </View>
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    backgroundColor: 'red',
    height: 50,
    width: 50
  },
  viewTwoParentStyle: {
    height: 100,
    justifyContent: 'flex-end'
  },
  viewTwoStyle: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
    // without parent wrapper
    // marginTop: 50
    // alignSelf: 'flex-end'
    // top: 50
  },
  viewThreeStyle: {
    backgroundColor: 'blue',
    height: 50,
    width: 50
  }
});

export default LayoutExerciseScreen;
