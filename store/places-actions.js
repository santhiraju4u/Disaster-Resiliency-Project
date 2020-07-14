import * as FileSystem from "expo-file-system";

import { insertPlace, fetchPlaces } from "../helpers/db";
import ENV from "../env";

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";

import IBMCOS from 'ibm-cos-sdk';
import util from 'util';
const config = {
  endpoint: 's3.eu-gb.cloud-object-storage.appdomain.cloud',
  apiKeyId: 'sTXAhHI_JphIi_1k98wT9To5_nqRhuMnwUrCmpBPIhBY',
  credentials: {
    accessKeyId: '586471c645b14132ad6118a5979b96dc',
    secretAccessKey: '2921ac10c4b87f2cd8053f210994072be2d54d055b43caa5',
  },
  ibmAuthEndpoint: 'https://iam.cloud.ibm.com/identity/token',
  region: 'eu-gb',
  serviceInstanceId: 'crn:v1:bluemix:public:cloud-object-storage:global:a/a4f7deacfe2e492d89d8f66e2a7fa9b8:4fcb054b-fb1d-4f49-bd72-fd50d5b33514::',
};

 const cosClient = new IBMCOS.S3(config);

const doCreateBucket = () => {
    console.log('Creating bucket');
    return cosClient.createBucket({
        Bucket: 'my-bucket',
        CreateBucketConfiguration: {
          LocationConstraint: 'eu-gb'
        },
    }).promise()
    .catch(function(err) {
      console.error('An error occurred:');
      console.error(util.inspect(err));
    });
}


export const addPlace = (title, image, location) => {
  return async (dispatch) => {

    doCreateBucket();
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${ENV.googleApiKey}`
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const resData = await response.json();
    if (!resData.results) {
      throw new Error("Something went wrong!");
    }

    const address = resData.results[0].formatted_address;

    const fileName = image.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbResult = await insertPlace(
        title,
        newPath,
        address,
        location.lat,
        location.lng
      );
      console.log(dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbResult.insertId,
          title: title,
          image: newPath,
          address: address,
          coords: {
            lat: location.lat,
            lng: location.lng,
          },
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces();
      console.log(dbResult);
      dispatch({ type: SET_PLACES, places: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
};
