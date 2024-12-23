import {StyleSheet} from 'react-native';

/** - 亮色樣式 */
export const lightStyles = StyleSheet.create({
  toast_container: {
    backgroundColor: '#ffffff',
  },
  toast_text: {
    color: '#1f2937',
  },
});

/** - 深色樣式 */
export const darkStyles = StyleSheet.create({
  toast_container: {
    backgroundColor: '#1d232a',
  },
  toast_text: {
    color: '#a6adbb',
  },
});

/** - 定位樣式 */
export const positionStyles = StyleSheet.create({
  'top-center': {top: 0, alignSelf: 'center'},
  'top-left': {left: 0, top: 0},
  'top-right': {right: 0, top: 0},
  'bottom-center': {bottom: 0, alignSelf: 'center'},
  'bottom-left': {left: 0, bottom: 0},
  'bottom-right': {right: 0, bottom: 0},
});

/** - 吐司樣式 */
export const toastStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    height: '100%',
    borderRadius: 8,
    gap: 8,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  text: {
    fontSize: 14,
    lineHeight: 14 * 1.3,
  },
  active: {
    zIndex: 9999,
  },
});
