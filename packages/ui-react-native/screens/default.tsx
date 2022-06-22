import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useApp} from '../hooks';

export const DefaultScreen: React.FC = () => {
  const {commands, queries} = useApp();

  useEffect(() => {
    commands.loadTodos().then(() => {
      console.log(queries.getTodos());
    });
  }, [commands, queries]);

  return (
    <SafeAreaView>
      <Text>DEFAULT SCREEN</Text>
    </SafeAreaView>
  );
};
