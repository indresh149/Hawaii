import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import IconArrow from 'react-native-vector-icons/AntDesign';

const ActivityCards = () => {
  const data = [
    {
      id: '1',
      title: 'Surfing',
      description: 'Best Hawaiian islands for surfing.',
      image: require('../assets/images/surfing.png'),
    },
    {
      id: '2',
      title: 'Hula',
      description: 'Try it yourself.',
      image: require('../assets/images/hula.png'),
    },
    {
      id: '3',
      title: 'Vulcanoes',
      description: 'Volcanic conditions can change at any time.',
      image: require('../assets/images/volcanoes.png'),
    },
  ];

  const Card = ({
    title,
    description,
    image,
  }: {
    title: string;
    description: string;
    image: any;
  }) => (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.circularForwardArrowContainer}>
        <IconArrow name="arrowright" size={30} color="#008080" />
      </View>
    </View>
  );

  return (
    <>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    </>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: height * 0.06,
  },
  card: {
    height: height * 0.42,
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
    color: '#008080',
    marginLeft: width * 0.08,
    fontSize: 24,
    margin: 10,
    fontFamily: 'IBMPlexMono-Bold',
  },
  descriptionContainer: {
    height: height * 0.1,
    width: '100%',
  },
  description: {
    marginLeft: width * 0.08,
    fontSize: 16,
    color: '#000',
    marginHorizontal: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
    fontFamily: 'IBMPlexMono-Regular',
    letterSpacing: 1,
  },
  circularForwardArrowContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#E6F2F2',
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActivityCards;
