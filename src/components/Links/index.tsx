import React from 'react';
import {Linking, TouchableOpacity, Text} from 'react-native';

type ExternalLinkProps = {
  text: string;
  url: string;
  style?: any;
  textStyle?: any;
};

export const ExternalLink = ({
  style,
  text,
  url,
  textStyle,
}: ExternalLinkProps) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)} style={style}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};
