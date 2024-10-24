import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  achievementContainerAndLine: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  achievementContainer: {
    width: 90,
    height: 90,
    borderWidth: 8,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdfdfd',
    marginBottom: 16,
  },
  achievementSuccess: {
    borderColor: '#ffde66',
  },
  achievementLocked: {
    borderColor: '#dedede',
  },
  verticalLine: {
    width: 2,
    height: 60,
    backgroundColor: '#c7c7c7',
    marginTop: -8,
  },
  trophyIcon: {
    position: 'absolute',
    top: -20,
    right: -15,
    width: 35,
    height: 35,
  },
});

export default styles;