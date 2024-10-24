import React from 'react';
import { View, StyleSheet } from 'react-native'; // Add StyleSheet
import AchievementsSection from '../components/AchievementsSection';

const YourIndexComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <AchievementsSection />
    </View>
  );
};

// Add some basic styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // or whatever background color you want
    padding: 16,
  },
});

export default YourIndexComponent;