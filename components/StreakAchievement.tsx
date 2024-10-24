import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import AchievementContainer from './AchievementContainer';

const StreakAchievement: React.FC<StreakAchievementProps> = ({ days, fireCount, isLocked }) => {
    const renderFireEmojis = () => {
    return Array(fireCount).fill().map((_, index) => (
      <Image 
        key={index}
        source={require('../assets/images/fire emoji (1).png')}
        style={[
          styles.fireEmoji,
          index > 0 && styles.overlappingFireEmoji
        ]}
      />
    ));
  };

  return (
    <AchievementContainer isLocked={isLocked}>
      <View style={styles.fireEmojiContainer}>
        {renderFireEmojis()}
      </View>
      <Text style={styles.achievementText}>
        {days}-Day Streak
      </Text>
    </AchievementContainer>
  );
};

const styles = StyleSheet.create({
    fireEmojiContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: -8, // Helps center the overlapping emojis
    },
    fireEmoji: {
      width: 35,
      height: 35,
      marginBottom: 4,
    },
    overlappingFireEmoji: {
      marginLeft: -20, // This creates the overlap effect
    },
    achievementText: {
      fontFamily: 'Roboto',
      fontSize: 12,
      color: '#42ade2',
      textAlign: 'center',
      paddingHorizontal: 4,
    },
  });

export default StreakAchievement;