import React from 'react';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

const Fechas = ({ ayer, hoy, manana }: { hoy: string; ayer: string; manana: string }) => {
  return (
    <View className="w-full flex-1 flex-row justify-between">
      <Text>{ayer}</Text>
      <Text>{hoy}</Text>
      <Text>{manana}</Text>
    </View>
  );
};

export default Fechas;
