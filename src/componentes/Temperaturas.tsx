import React from 'react';

import { Text } from '@/components/ui/text';
import { View } from 'react-native';

const Temperaturas = ({
  actual,
  minima,
  maxima,
}: {
  actual: number;
  minima: number;
  maxima: number;
}) => {
  return (
    <View className="w-full flex-row items-baseline justify-between px-4">
      <Text className="text-lg text-gray-400">{minima}º</Text>
      <Text className="text-4xl font-black text-black underline">{actual}º</Text>
      <Text className="text-lg text-gray-400">{maxima}º</Text>
    </View>
  );
};

export default Temperaturas;
