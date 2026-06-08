import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContenedorProps {
  children: ReactNode;
  className?: string;
  testID?: string;
}

const Contenedor = ({ children, className, testID }: ContenedorProps) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {}
      <View
        testID={testID}
        className={`flex-1 items-center justify-between p-6 ${className || ''}`}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Contenedor;
