import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

interface FriendProfileVerticalProps {
  imageSource: string;
  name: string;
  onPress: () => void;
}

const FriendProfileVertical: React.FC<FriendProfileVerticalProps> = ({ imageSource, name, onPress }) => {
  return (
    <View style={styles.friend_profile_container}>
      <View style={styles.friendContainer}>
        <Image source={imageSource} style={styles.profilePicture} resizeMode="contain" />
        <Text style={styles.profileNameText}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  friend_profile_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: -30,
  },
  friendContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
  profileNameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default FriendProfileVertical;