import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import Contenedor from '@/src/componentes/Contenedor';
import DatosClima from '@/src/componentes/DatosClima';
import Fechas from '@/src/componentes/Fechas';
import IconosDias from '@/src/componentes/IconosDias';
import NombreCiudad from '@/src/componentes/NombreCiudad';
import Temperaturas from '@/src/componentes/Temperaturas';
import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const pronosticoSemanas = [
  {
    id: 0,
    fecha: '03-06',
    temperatura: '26º',
    humedad: '62%',
    presion: '1008 hPa',
    viento: '1.2 m/s',
    estado: 'nublado',
  },
  {
    id: 1,
    fecha: '04-06',
    temperatura: '25º',
    humedad: '58%',
    presion: '1006 hPa',
    viento: '0.8 m/s',
    estado: 'sol',
  },
  {
    id: 2,
    fecha: '05-06',
    temperatura: '20º',
    humedad: '75%',
    presion: '1002 hPa',
    viento: '2.5 m/s',
    estado: 'lluvia',
  },
];

export default function Screen() {
  const [diaSeleccionado, setDiaSeleccionado] = useState(1);
  const climaActual = pronosticoSemanas[diaSeleccionado];

  const cambiarDiaDefinido = (idDestino: number) => {
    if (idDestino >= 0 && idDestino < pronosticoSemanas.length) {
      setDiaSeleccionado(idDestino);
    }
  };

  // Lógica para rotar las posiciones de las temperaturas de abajo
  let tempIzquierda = pronosticoSemanas[0].temperatura; // Por defecto: Ayer (26º)
  let tempDerecha = pronosticoSemanas[2].temperatura; // Por defecto: Mañana (20º)

  if (diaSeleccionado === 0) {
    // Si elegimos Ayer (0): Ayer va al centro, Hoy va a la izquierda
    tempIzquierda = pronosticoSemanas[1].temperatura;
    tempDerecha = pronosticoSemanas[2].temperatura;
  } else if (diaSeleccionado === 2) {
    // Si elegimos Mañana (2): Mañana va al centro, Hoy va a la derecha
    tempIzquierda = pronosticoSemanas[0].temperatura;
    tempDerecha = pronosticoSemanas[1].temperatura;
  }

  return (
    <Contenedor>
      <Fechas
        ayer={pronosticoSemanas[0].fecha}
        hoy={pronosticoSemanas[1].fecha}
        manana={pronosticoSemanas[2].fecha}
        diaActivo={diaSeleccionado}
        onCambiarDia={cambiarDiaDefinido}
      />

      <NombreCiudad nombre="Villa Riachuelo" />

      <IconosDias estado={climaActual.estado} />

      <DatosClima
        humedad={climaActual.humedad}
        aceleracion={climaActual.presion}
        visibilidad={climaActual.viento}
      />

      {/* Barra inferior con rotación de posiciones físicas */}
      <Temperaturas actual={23} minima={24} maxima={25}></Temperaturas>
    </Contenedor>
  );
}
