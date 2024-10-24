import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import HeaderButtons from '../components/header_buttons';
import FriendProfileVertical from '../components/friend_profile_vertical';
import DatingToggle from '../components/open_to_dating';
import MessageStatsChart from '../components/message_stats_chart';
import ActiveStreaks from '../components/ActiveStreaks';
import StatsBar from '../components/user_stats_bar';
import AchievementsSection from '@/components/AchievementsSection';


const ProfilePage = () => {

  const handleFindFriends = () => {
    console.log('Find friends');
  };

  const handleUpgrade = () => {
    console.log('Upgrade');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderButtons 
          onPressFindFriends={handleFindFriends}
          onPressUpgrade={handleUpgrade}
        />
      </View>
      <View style={styles.friendProfileContainer}>
        <FriendProfileVertical 
          imageSource={require('../assets/images/profile_picture.jpg')} 
          name="Jpp123" 
          onPress={() => console.log('Friend profile pressed')}
        />
        <DatingToggle />
      </View>
      <View style={styles.chartContainer}>
        <MessageStatsChart 
          data={[10, 20, 30, 40, 50, 60, 70]}
          title="Weekly Activity"
          subtitle="Messages sent over the week"
        />
      </View>
      <StatsBar />
      <ActiveStreaks />
      <AchievementsSection />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FCFE', // Match your app's background color
  },
  friendProfileContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  chartContainer: {
    backgroundColor: '#F0FCFE'
  },
});

export default ProfilePage;