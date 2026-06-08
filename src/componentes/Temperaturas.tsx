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
    // w-full ocupa toda la pantalla
    <View
      className="flex w-full flex-row items-center px-6"
      style={{
        justifyContent: 'space-between',
      }}>
      {/* Mínima a la izquierda */}
      <View>
        <Text className="text-xl font-medium text-gray-400">{minima}º</Text>
      </View>

      {/* Actual en el centro milimétrico */}
      <View>
        <Text className="text-4xl font-black text-black">{actual}º</Text>
      </View>

      {/* Máxima a la derecha */}
      <View>
        <Text className="text-xl font-medium text-gray-400">{maxima}º</Text>
      </View>
    </View>
  );
};

export default Temperaturas;
