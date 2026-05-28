import { DropletIcon, GaugeIcon, FlagIcon } from 'lucide-react-native';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { View } from 'react-native';
import React from 'react';

const DatosClima = ({
  humedad,
  aceleracion,
  visibilidad,
}: {
  humedad: string;
  aceleracion: string;
  visibilidad: string;
}) => {
  return (
    <View className="w-full px-8">
      <View className="flex flex-row items-center">
        <Icon as={DropletIcon} size={16}></Icon>

        <Text className="ml-2 font-black">{humedad}</Text>
      </View>

      <View className="flex flex-row items-center">
        <Icon as={GaugeIcon} size={16}></Icon>

        <Text className="ml-2 font-black">{aceleracion}</Text>
      </View>

      <View className="flex flex-row items-center">
        <Icon as={FlagIcon} size={16}></Icon>

        <Text className="ml-2 font-black">{visibilidad}</Text>
      </View>
    </View>
  );
};

export default DatosClima;
