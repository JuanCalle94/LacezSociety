import { getApiUrl } from "../config";

export const getData = ({ path }) => {
  const apiUrl = getApiUrl(path);
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
