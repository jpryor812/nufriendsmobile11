import React from 'react';
import { View, Image } from 'react-native';
import styles from './AchievementsStyles';  // Remove 'AchievementsStyles' and just use 'styles'

const AchievementContainer = ({ children, isLocked }) => {
  return (
    <View style={styles.achievementContainerAndLine}>
      <View style={[
        styles.achievementContainer,
        isLocked ? styles.achievementLocked : styles.achievementSuccess
      ]}>
        {!isLocked && (
          <Image 
            source={require('../assets/images/trophy_emoji_progress_bar.png')}
            style={styles.trophyIcon}
          />
        )}
        {children}
      </View>
      <View style={styles.verticalLine} />
    </View>
  );
};

export default AchievementContainer;