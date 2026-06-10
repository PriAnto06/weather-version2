import React, { useState } from 'react';
import { View } from 'react-native';

import Contenedor from '@/src/componentes/Contenedor';
import DatosClima from '@/src/componentes/DatosClima';
import Fechas from '@/src/componentes/Fechas';
import IconosDias from '@/src/componentes/IconosDias';
import NombreCiudad from '@/src/componentes/NombreCiudad';
import Temperaturas from '@/src/componentes/Temperaturas';

export default function AppWeather() {
  const [diaActivo, setDiaActivo] = useState(1);

  const datosClima = [
    {
      estado: 'soleado',
      humedad: 60,
      presion: 1013,
      viento: 15,
      minima: 12,
      actual: 18,
      maxima: 24,
    },
    {
      estado: 'nublado',
      humedad: 70,
      presion: 1010,
      viento: 10,
      minima: 14,
      actual: 20,
      maxima: 25,
    },
    {
      estado: 'lluvia',
      humedad: 90,
      presion: 1005,
      viento: 20,
      minima: 16,
      actual: 19,
      maxima: 22,
    },
  ];

  const climaActual = datosClima[diaActivo];

  return (
    <Contenedor testID="screen-weather">
      <Fechas
        ayer="07-06"
        hoy="08-06"
        manana="09-06"
        diaActivo={diaActivo}
        onCambiarDia={setDiaActivo}
      />

      <View className="w-full flex-1 items-center justify-center gap-y-6">
        <NombreCiudad nombre="Villa Riachuelo" />

        <IconosDias estado={climaActual.estado} />

        <DatosClima
          humedad={climaActual.humedad}
          aceleracion={climaActual.presion}
          visibilidad={climaActual.viento}
        />
      </View>

      <Temperaturas
        minima={climaActual.minima}
        actual={climaActual.actual}
        maxima={climaActual.maxima}
      />
    </Contenedor>
  );
}
