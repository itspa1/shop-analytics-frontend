import API from "./axios";

export const fetchPiData = (fileName = undefined) => {
  return new Promise(async (resolve, reject) => {
    try {
      //TODO: set headers after setting up authorization
      const piDataResponse = await API.get("piData", {
        params: { fileName: fileName || undefined }
      });
      return resolve(piDataResponse);
    } catch (error) {
      return reject(error);
    }
  });
};
