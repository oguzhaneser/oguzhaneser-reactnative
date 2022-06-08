import { API_URL } from "../connections";

export const getProductsRequest = async () => {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}products`)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
