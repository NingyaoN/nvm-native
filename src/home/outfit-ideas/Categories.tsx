import React from 'react';

import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Category from './Category';

const categories = [
  {
    id: 'navin',
    title: 'New In',
    color: '#FFE8E9',
  },
  {
    id: 'summner',
    title: 'Summner',
    color: '#F1E0FF',
  },
  {
    id: 'newin',
    title: 'New In',
    color: '#FFE8E9',
  },
  {
    id: 'activewear',
    title: 'Active Wear',
    color: '#BFEAF5',
  },
  {
    id: 'outliet',
    title: 'Outlet',
    color: '#F1E0FF',
  },
  {
    id: 'accesories',
    title: 'Accesories',
    color: '#FFE8E9',
  },
];

const Categories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
