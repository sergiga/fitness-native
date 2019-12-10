import * as React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

function RText(props) {
  const { style, children } = props
  const scale = props.scale || 'body1';

  return (
    <Text style={{...styles.common, ...styles[scale], ...style}}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  common: {
    color: '#3F4149'
  },
  h1: {
    fontSize: 96,
    fontFamily: 'Rubik-Bold'
  },
  h2: {
    fontSize: 60,
    fontFamily: 'Rubik-Bold'
  },
  h3: {
    fontSize: 48,
    fontFamily: 'Rubik-Bold'
  },
  h4: {
    fontSize: 34,
    fontFamily: 'Rubik-Bold'
  },
  h5: {
    fontSize: 24,
    fontFamily: 'Rubik-Bold'
  },
  h6: {
    fontSize: 20,
    fontFamily: 'Rubik-Medium'
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
