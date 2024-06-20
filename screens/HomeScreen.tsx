import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import ActivityCards from '../components/ActivityCards';
import Categories from '../components/Categories';
import TravelGuide from '../components/TravelGuide';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.upperLogo}
            source={require('../assets/images/Aloha.png')}
          />
        </View>

        <ImageBackground
          source={require('../assets/images/Head.png')}
          style={styles.imageBackground}></ImageBackground>

        <View style={styles.highlights}>
          <Text style={styles.sectionTitle}>Highlights</Text>
        </View>

        <ActivityCards />
        <Categories />
        <TravelGuide />
      </ScrollView>

      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book a trip</Text>
      </TouchableOpacity>
    </View>
  );
};
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingBottom: 80,
  },
  imageBackground: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperLogo: {
    marginTop: height*0.02,
    height: height * 0.06,
    width: width * 0.5,
    resizeMode:'contain',
    alignSelf:'center'
  },
  logoContainer:{
    height: height * 0.1,
    width:'100%'
  },
  highlights: {
    marginTop: height * 0.02,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'IBMPlexMono-Bold',
    color: 'black',
  },
  bookButton: {
    position: 'absolute',
    bottom: 20,
    left: width * 0.25,
    transform: [{translateX: -75}],
    width: width - 50,
    padding: 15,
    height: height * 0.07,
    backgroundColor: '#008080',
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'IBMPlexMono-Bold',
  },
  UpperText: {
    marginTop: height * 0.01,
    fontSize: 36,
    color: 'black',
    alignSelf: 'center',
    fontFamily: 'IBMPlexMono-BoldItalic',
    padding: 10,
  },
  card: {
    width: width * 0.8,
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
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
