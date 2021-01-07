import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image} from 'react-native';

export default TestApi = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://hero-pregbackend.herokuapp.com/shop/')
      .then((response) => products = response.json())
      .then((products) => setData(products))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
          <Text>{item.title}, {item.price}, {item.img}</Text>
            <View>
            <View>
          )}
        />
      )}
    </View>
  );
};