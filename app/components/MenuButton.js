import * as React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import RText, { RTextStyles } from '@components/RText';

function MenuButton(props) {
  const { onPress, children } = props

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.button}>
          <RText scale={RTextStyles.subtitle1}>{children}</RText>
          <Icon name="right" size={16} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 64
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 24
  },
});

export default MenuButton;
