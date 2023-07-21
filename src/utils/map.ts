import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import axiosClient from '../configs/axiosClient';

//import axiosClient from "../api/axiosClient";
const MAP_4D_KEY = '677223fd5b8bebf586b738af42c3cb15';

export const getAddressFromLocation = async (location: any) => {
  console.log(1237);
  const locationStr = location.latitude + ',' + location.longitude;
  const url = `https://api.map4d.vn/sdk/v2/geocode?key=${MAP_4D_KEY}&location=${locationStr}`;
  const result: any = await axiosClient.get(url);
  if (result?.code === 'ok') {
    let address = result.result[0].address;
    if (!address.includes('Việt Nam')) {
      address += ', Việt Nam';
    }
    return address;
  } else {
    return null;
  }
};

export const getAddressFromText = async (text: string) => {
  console.log(12366);
  const url = `http://api.map4d.vn/sdk/autosuggest?key=${MAP_4D_KEY}&text=${text}`;
  const result: any = await axiosClient.get(url);
  if (result.code === 'ok') {
    let listAdress = result.result.slice(0, 5); //only show 5 address
    return listAdress;
  } else {
    return null;
  }
};

export const calcDistance2Location = async (location1: any, location2: any) => {
  console.log(123456);
  const url = `http://api.map4d.vn/sdk/route/matrix?key=${MAP_4D_KEY}&origins=${location1}&destinations=${location2}&mode=car&language=vi&weighting=2`;
  const result: any = await axiosClient.get(url);
  //console.log(result);
  if (result?.code === 'ok') {
    return result;
  } else return null;
};

export const locationPermisson = () =>
  new Promise(async (res, rej) => {
    if (Platform.OS === 'ios') {
      try {
        const permissionStatus = await Geolocation.requestAuthorization(
          'always',
        );
        if (permissionStatus === 'granted') {
          return res('granted');
        }
        rej('permission not granted');
      } catch (error) {
        return rej(error);
      }
    }
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )
      .then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          res('granted');
        }
        return rej('Location Permission denied');
      })
      .catch(error => {
        console.log('Ask Location permission error:', error);
        return rej(error);
      });
  });
