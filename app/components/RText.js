import * as React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

function RText(props) {
  const { children } = props
  const scale = props.scale || 'body1';

  return (
    <Text style={styles.common, styles[scale]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  common: {
    color: '#3F4149'
  },
  subtitle1: {
    fontSize: 16,
    fontFamily: 'Rubik-Medium'
  },
  subtitle2: {
    fontSize: 14,
    fontFamily: 'Rubik-Medium'
  },
  body1: {
    fontSize: 16,
    fontFamily: 'Rubik-Regular'
  },
  body2: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular'
  },
  caption: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular'
  }
});

export default RText;
