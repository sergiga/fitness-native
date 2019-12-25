import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  StyleProp
} from 'react-native';

interface IProps {
  children: React.ReactNode;
  type?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function RText({ children, textStyle, type }: IProps) {
  return (
    <Text style={[RTextStyles.common, type, textStyle]}>{children}</Text>
  );
};

interface Style {
  common: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  subtitle1: TextStyle;
  subtitle2: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  caption: TextStyle;
}

export const RTextStyles = StyleSheet.create<Style>({
  common: {
    color: '#3F4149',
    fontSize: 16,
    fontFamily: 'Rubik-Regular'
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
