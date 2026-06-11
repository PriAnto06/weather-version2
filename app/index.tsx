import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

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

  return (
    <Contenedor testID="screen-weather">
      {historico && pronostico ? (
        <>
          <Fechas
            ayer={historico.forecast.forecastday[0].date}
            hoy={pronostico.forecast.forecastday[0].date}
            manana={pronostico.forecast.forecastday[1].date}
            diaActivo={diaActivo}
            onCambiarDia={setDiaActivo}
          />

          <View className="w-full flex-1 items-center justify-center gap-y-6">
            <NombreCiudad
              nombre={
                tienePermisos() ? (pronostico as any).location.region : 'Obteniendo ubicación...'
              }
            />

            <IconosDias estado={historico.forecast.forecastday[0].day.condition.text} />

            <DatosClima
              humedad={historico.forecast.forecastday[0].day.avghumidity}
              aceleracion={historico.forecast.forecastday[0].day.maxwind_kph}
              visibilidad={historico.forecast.forecastday[0].day.avgvis_km}
            />
          </View>

          <Temperaturas
            minima={historico.forecast.forecastday[0].day.mintemp_c}
            actual={historico.forecast.forecastday[0].day.avgtemp_c}
            maxima={historico.forecast.forecastday[0].day.maxtemp_c}
          />
        </>
      ) : (
        <Text>cargando...</Text>
      )}
    </Contenedor>
  );
}
