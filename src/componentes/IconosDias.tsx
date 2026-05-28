import React from 'react';
import { Icon } from '@/components/ui/icon';
import { SunIcon } from 'lucide-react-native';
const IconosDias = ({ estado }: { estado: string }) => {
  return <Icon as={SunIcon} size={128}></Icon>;
};

export default IconosDias;
