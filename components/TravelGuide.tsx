import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const TravelGuide = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Travel guide</Text>
      <View style={styles.card}>
        <View style={styles.leftContainer}>
          <Text style={styles.mainText}>Hadwin Malone</Text>
          <Text style={styles.descriptionText}>Guide since 2012</Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactText}>Contact</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.circularPic}>
            <Image
              source={require('../assets/images/guidepic.png')}
              style={styles.picStyle}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F4F2',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontFamily: 'IBMPlexMono-Bold',
    color: '#000',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: height * 0.25,
    width: width - 30,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  leftContainer: {
    width: width * 0.6,
    height: height * 0.25,
  },
  rightContainer: {
    width: width * 0.4,
    height: height * 0.25,
  },
  mainText: {
    marginTop: height * 0.03,
    alignSelf: 'center',
    fontSize: 22,
    fontFamily: 'IBMPlexMono-Bold',
    margin: 10,
    color: '#000',
    letterSpacing: 1,
  },
  descriptionText: {
    fontFamily:'IBMPlexMono-Regular',
    marginLeft: width * 0.09,
    fontSize: 16,
    color: '#000',
    marginHorizontal: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
    letterSpacing: 1,
  },
  contactButton: {
    width: width * 0.3,
    height: height * 0.06,
    borderWidth: 2,
    borderColor: '#008080',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.04,
    marginLeft: width * 0.09,
  },
  contactText: {
    color: '#008080',
    fontSize: 16,
    fontFamily: 'IBMPlexMono-Bold',
  },
  circularPic: {
    width: width * 0.29,
    height: height * 0.15,
    borderRadius: (width * 0.4) / 2,
    overflow: 'hidden',
    marginTop: height * 0.03,
  },
  picStyle: {
    width: '90%',
    height: '90%',
  },
});

export default TravelGuide;
