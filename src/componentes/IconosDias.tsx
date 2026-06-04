import React from 'react';
import { Icon } from '@/components/ui/icon';
import { Sun, Cloud, CloudRain } from 'lucide-react-native';

const IconosDias = ({ estado }: { estado: string }) => {
  let iconoActual = Sun;

  if (estado === 'nublado') {
    iconoActual = Cloud;
  } else if (estado === 'lluvia') {
    iconoActual = CloudRain;
  }

  return <Icon as={iconoActual} size={128} className="my-6 text-black" />;
};

export default IconosDias;
