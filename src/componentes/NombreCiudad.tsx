import React from 'react';
import { Text } from '@/components/ui/text';

const NombreCiudad = ({ nombre }: { nombre: string }) => {
  return <Text className="text-2xl font-black">{nombre}</Text>;
};

export default NombreCiudad;
