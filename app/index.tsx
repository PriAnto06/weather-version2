import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import DatosClima from '@/src/componentes/DatosClima';
import Fechas from '@/src/componentes/Fechas';
import IconosDias from '@/src/componentes/IconosDias';
import NombreCiudad from '@/src/componentes/NombreCiudad';
import { DropletIcon, GaugeIcon, FlagIcon } from 'lucide-react-native';
import * as React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen() {
  return (
    <>
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-around gap-8 p-4">
          <Fechas hoy={'28-05'} ayer={'27-05'} manana={'29-05'} />
          <NombreCiudad nombre={'Villa Riachuelo'} />
          <IconosDias estado="" />
          <View className="w-full flex-1 flex-row items-center justify-around">
            <Text>26º</Text>
            <Text className="text-2xl">25º</Text>
            <Text>20º</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
