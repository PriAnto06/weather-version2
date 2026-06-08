import React, { useEffect, useState } from 'react';
import {
  getCurrentPositionAsync,
  LocationAccuracy,
  requestForegroundPermissionsAsync,
} from 'expo-location';

const useGeolocalizacion = () => {
  const [ubicacion, cambiarUbicacion] = useState({ latitud: 0, longitud: 0 });
  const [tienePermisos, configurarPermisos] = useState(false);

  useEffect(() => {
    async function obtenerLocalizacion() {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let localizacion = await getCurrentPositionAsync({
        accuracy: LocationAccuracy.BestForNavigation,
      });
      configurarPermisos(true);
      cambiarUbicacion({
        latitud: localizacion.coords.latitude,
        longitud: localizacion.coords.longitude,
      });
    }

    obtenerLocalizacion();
  }, []);

  return {
    localizacion: () => ubicacion,
    tienePermisos: () => tienePermisos,
  };
};

export default useGeolocalizacion;
