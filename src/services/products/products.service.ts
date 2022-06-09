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

export const getProductByIdRequest = async (id: number) => {
  return new Promise((resolve, reject) => {
    if (id) {
      fetch(`${API_URL}products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      reject({ message: "Id is required" });
    }
  });
};

export const addProductRequest = async (product: any) => {
  return new Promise((resolve, reject) => {
    if (product) {
      fetch(`${API_URL}products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      reject({ message: "Product is empty" });
    }
  });
};
