import API from "./axios";

export const fetchPiData = (
  fileName = undefined,
  numberOfLines = undefined
) => {
  return new Promise(async (resolve, reject) => {
    try {
      //TODO: set headers after setting up authorization
      const piDataResponse = await API.get("piData", {
        params: { fileName, numberOfLines }
      });
      return resolve(piDataResponse);
    } catch (error) {
      return reject(error);
    }
  });
};
