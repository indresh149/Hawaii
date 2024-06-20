import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import IconArrow from 'react-native-vector-icons/AntDesign';

const categories = [
  {id: '1', title: 'Adventure'},
  {id: '2', title: 'Culinary'},
  {id: '3', title: 'Eco-tourism'},
  {id: '4', title: 'Family'},
  {id: '5', title: 'Sport'},
];

const CategoryItem = ({title}: {title: string}) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <IconArrow name="arrowright" size={30} color="#008080" />
  </TouchableOpacity>
);

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        scrollEnabled={false}
        data={categories}
        renderItem={({item}) => <CategoryItem title={item.title} />}
        keyExtractor={item => item.id}
      />
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
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 20,
    marginBottom: 10,
    color: '#000',
  },
  item: {
    height: height * 0.09,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontFamily:'IBMPlexMono-Regular',
    fontSize: 18,
  },
});

export default Categories;
