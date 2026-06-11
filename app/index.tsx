import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import useGeolocalizacion from '@/src/hooks/useGeolocalizacion';

import Contenedor from '@/src/componentes/Contenedor';
import DatosClima from '@/src/componentes/DatosClima';
import Fechas from '@/src/componentes/Fechas';
import IconosDias from '@/src/componentes/IconosDias';
import NombreCiudad from '@/src/componentes/NombreCiudad';
import Temperaturas from '@/src/componentes/Temperaturas';

export default function AppWeather() {
  const [diaActivo, setDiaActivo] = useState(1);
  const [historico, setHistorico] = useState(null);
  const [pronostico, setPronostico] = useState(null);

  const { localizacion, tienePermisos } = useGeolocalizacion();
  const ubicacion = localizacion();

  const ayer = new Date();
  ayer.setDate(ayer.getDate() - 1);

  const fechaAyer = ayer.toISOString().split('T')[0];
  useEffect(() => {
    if (!tienePermisos() || ubicacion.latitud === 0 || ubicacion.longitud === 0) {
      return;
    }

    const apiCall = async () => {
      try {
        const [historial, pronostico] = await Promise.all([
          fetch(
            `https://api.weatherapi.com/v1/history.json?key=16d9aedd284d42aaa6d174225261006&q=${ubicacion.latitud},${ubicacion.longitud}&dt=${fechaAyer}`
          ).then((r) => r.json()),

          fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=16d9aedd284d42aaa6d174225261006&q=${ubicacion.latitud},${ubicacion.longitud}&days=2`
          ).then((r) => r.json()),
        ]);
        console.log('historico', historial);
        console.log('pronostico', pronostico);

        setHistorico(historial);
        setPronostico(pronostico);
      } catch (error) {
        console.log(error);
      }
    };

    apiCall();
  }, [ubicacion]);

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
      humedad: 90,
      estado: 'lluvia',
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
        ayer={'07-06'}
        hoy="08-06"
        manana="09-06"
        diaActivo={diaActivo}
        onCambiarDia={setDiaActivo}
      />

      <View className="w-full flex-1 items-center justify-center gap-y-6">
        <NombreCiudad
          nombre={
            tienePermisos()
              ? `${ubicacion.latitud.toFixed(4)}, ${ubicacion.longitud.toFixed(4)}`
              : 'Obteniendo ubicación...'
          }
        />

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
