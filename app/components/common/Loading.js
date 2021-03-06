import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { secondaryColor } from '../../constants';

const Loading = props => {
  return (
    <View style={styles.loadingStyle}>
      <ActivityIndicator size={props.size || 'large'} color={secondaryColor} />
      <Text style={styles.text}>
        {props.loadingText}
      </Text>
    </View>
  );
};

const styles = {
  loadingStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16
  },
  text: {
    fontFamily: 'Montserrat-Light'
  }
};

export { Loading };
