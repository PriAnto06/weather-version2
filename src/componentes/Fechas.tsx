import React from 'react';
import { View, Text, Pressable } from 'react-native';

// Definimos los tipos de datos que va a recibir el componente
interface FechasProps {
  ayer: string;
  hoy: string;
  manana: string;
  diaActivo: number; // <-- Declaramos diaActivo
  onCambiarDia: (id: number) => void; // <-- Declaramos la función
}

const Fechas = ({ ayer, hoy, manana, diaActivo, onCambiarDia }: FechasProps) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
      }}>
      {/* Botón Ayer (ID: 0) */}
      <Pressable
        onPress={() => onCambiarDia(0)}
        style={({ pressed }) => ({
          flexDirection: 'row',
          alignItems: 'center',
          opacity: pressed ? 0.5 : 1,
        })}>
        <Text
          style={{
            color: diaActivo === 0 ? '#000000' : '#9ca3af',
            fontSize: 12,
            marginRight: 2,
            fontWeight: diaActivo === 0 ? 'bold' : 'normal',
          }}>
          &lt;
        </Text>
        <Text
          style={{
            color: diaActivo === 0 ? '#000000' : '#9ca3af',
            fontSize: 12,
            fontWeight: diaActivo === 0 ? 'bold' : 'normal',
            textDecorationLine: diaActivo === 0 ? 'underline' : 'none',
          }}>
          {ayer}
        </Text>
      </Pressable>

      {/* Botón Hoy (ID: 1) */}
      <Pressable
        onPress={() => onCambiarDia(1)}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}>
        <Text
          style={{
            color: diaActivo === 1 ? '#000000' : '#9ca3af',
            fontSize: 14,
            fontWeight: diaActivo === 1 ? 'bold' : 'normal',
            textDecorationLine: diaActivo === 1 ? 'underline' : 'none',
          }}>
          {hoy}
        </Text>
      </Pressable>

      {/* Botón Mañana (ID: 2) */}
      <Pressable
        onPress={() => onCambiarDia(2)}
        style={({ pressed }) => ({
          flexDirection: 'row',
          alignItems: 'center',
          opacity: pressed ? 0.5 : 1,
        })}>
        <Text
          style={{
            color: diaActivo === 2 ? '#000000' : '#9ca3af',
            fontSize: 12,
            marginRight: 2,
            fontWeight: diaActivo === 2 ? 'bold' : 'normal',
            textDecorationLine: diaActivo === 2 ? 'underline' : 'none',
          }}>
          {manana}
        </Text>
        <Text
          style={{
            color: diaActivo === 2 ? '#000000' : '#9ca3af',
            fontSize: 12,
            fontWeight: diaActivo === 2 ? 'bold' : 'normal',
          }}>
          &gt;
        </Text>
      </Pressable>
    </View>
  );
};

export default Fechas;
