import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import RText from '@components/RText';

function MenuButton(props) {
  const { onPress, children } = props

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.button}>
          <RText scale={'subtitle1'}>{children}</RText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 64,
    margin: 24
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    margin: 24
  },
});

export default MenuButton;
