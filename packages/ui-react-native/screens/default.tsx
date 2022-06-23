import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useApp} from '../hooks';

export const DefaultScreen: React.FC = observer(() => {
  const {commands, queries} = useApp();

  const todos = queries.getTodos();

  console.log(todos);

  useEffect(() => {
    commands.loadTodos();
  }, [commands]);

  return (
    <SafeAreaView>
      <Text>DEFAULT SCREEN</Text>
    </SafeAreaView>
  );
});
