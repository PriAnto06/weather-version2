import React from 'react';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { DropletIcon, GaugeIcon, FlagIcon } from 'lucide-react-native';

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
    <View style={{ gap: 14, marginVertical: 20, alignItems: 'flex-start', width: '40%' }}>
      {/* Humedad */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <DropletIcon size={20} color="#000000" />
        <Text className="ml-3 text-sm font-semibold text-black">{humedad}</Text>
      </View>

      {/* Presión */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <GaugeIcon size={20} color="#000000" />
        <Text className="ml-3 text-sm font-semibold text-black">{aceleracion}</Text>
      </View>

      {/* Viento */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FlagIcon size={20} color="#000000" />
        <Text className="ml-3 text-sm font-semibold text-black">{visibilidad}</Text>
      </View>
    </View>
  );
};

export default DatosClima;
