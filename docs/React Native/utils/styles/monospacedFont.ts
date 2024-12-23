import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  Courier: {
    fontFamily: creatMono('Courier'),
  },
  Menlo: {
    fontFamily: creatMono('Menlo'),
  },
  CourierNewPSMT: {
    fontFamily: creatMono('CourierNewPSMT'),
  },
});

function creatMono(font: string) {
  return Platform.OS === 'ios' ? font : 'monospace';
}
