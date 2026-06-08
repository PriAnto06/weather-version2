import Contenedor from '@/src/componentes/Contenedor';
import DatosClima from '@/src/componentes/DatosClima';
import Fechas from '@/src/componentes/Fechas';
import IconosDias from '@/src/componentes/IconosDias';
import NombreCiudad from '@/src/componentes/NombreCiudad';
import Temperaturas from '@/src/componentes/Temperaturas';
import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';

export default function AppWeather() {
  return (
    <Contenedor testID="screen-weather">
      {/* 1. Fechas */}
      <Fechas ayer={'07-06'} hoy={'08-06'} manana={'09-06'} />

      {/* 2. Bloque Central */}
      <View className="w-full flex-1 items-center justify-center gap-y-6">
        <NombreCiudad nombre="Villa Riachuelo" />
        <IconosDias estado={climaActual.estado} />
        <DatosClima
          humedad={climaActual.humedad}
          aceleracion={climaActual.presion}
          visibilidad={climaActual.viento}
        />
      </View>

      {/* 3. Contenedor  */}
      <Temperaturas minima={numMinima} actual={numActual} maxima={numMaxima} />
    </Contenedor>
  );
}
