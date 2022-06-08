import { API_URL } from "../connections";

export const getCategoriesRequest = async () => {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}categories`)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
