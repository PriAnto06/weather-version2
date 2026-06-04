import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Contenedor = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-between p-6">{children}</View>
    </SafeAreaView>
  );
};

export default Contenedor;
