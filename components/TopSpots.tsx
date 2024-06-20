import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const categories = [
  {id: '1', title: 'Maui', image: require('../assets/images/maui.png')},
  {id: '2', title: 'Kauai', image: require('../assets/images/kauai.png')},
  {id: '3', title: 'Honolulu', image: require('../assets/images/honolulu.png')},
];

const CategoryItem = ({
  item,
}: {
  item: {id: string; title: string; image: any};
}) => (
  <TouchableOpacity style={styles.item}>
    <View style={styles.leftpart}>
      <Text style={styles.idStyle}>
        {item.id}
        {'.'}
      </Text>
      <Text style={styles.title}>{item.title}</Text>
    </View>
    <View style={styles.cornerImage}>
      <Image source={item.image} style={styles.imageStyle} />
    </View>
  </TouchableOpacity>
);

const TopSpots = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top spots</Text>
      <FlatList
      scrollEnabled={false}
        data={categories}
        renderItem={({item}) => <CategoryItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 18,
     fontFamily:'IBMPlexMono-Bold',
    marginBottom: 10,
    color: '#000',
  },
  item: {
    height: height * 0.09,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    marginRight: 10,
    color: '#008080',
    fontFamily:'IBMPlexMono-Regular',
  },
  cornerImage: {
    width: '50%',
    height: height * 0.097,
  },
  imageStyle: {
    borderRadius: 10,
    height: '95%',
    resizeMode: 'contain',
  },
  idStyle: {
    fontSize: 18,
    marginRight: 10,
    color: '#008080',
  },
  leftpart: {
    width: '50%',
    flexDirection: 'row',
  },
});

export default TopSpots;
