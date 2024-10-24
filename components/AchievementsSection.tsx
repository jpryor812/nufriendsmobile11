import React from 'react';
import { View, StyleSheet } from 'react-native';
import MessageAchievement from './MessageAchievement';
import StreakAchievement from './StreakAchievement';
import MutualFriendAchievement from './MutualFriendAchievement';

const AchievementsSectionBackup = () => {
  return (
    <View style={styles.achievementsContainer}>
      {/* Messages Row */}
      <View style={styles.achievementsRow}>
        <MessageAchievement count={100} isLocked={false} />
        <MessageAchievement count={500} isLocked={false} />
        <MessageAchievement count={1000} isLocked={true} />
      </View>

      {/* Streaks Row */}
      <View style={styles.achievementsRow}>
        <StreakAchievement days={5} fireCount={1} isLocked={false} />
        <StreakAchievement days={10} fireCount={2} isLocked={false} />
        <StreakAchievement days={25} fireCount={4} isLocked={true} />
      </View>

      {/* Mutual Friends Row */}
      <View style={styles.achievementsRow}>
        <MutualFriendAchievement count={1} isLocked={false} />
        <MutualFriendAchievement count={5} isLocked={false} />
        <MutualFriendAchievement count={10} isLocked={true} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    achievementsContainer: {
      padding: 16,
    },
    achievementsRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginVertical: 8,
    },
  });

export default AchievementsSectionBackup;