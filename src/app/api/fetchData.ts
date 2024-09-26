import axios from "axios";
import { Endpoint } from "../types/Types";

const URL = "http://localhost:3001/";

export async function fetchDatas(endpoint: Endpoint) {
  try {
    const response = await axios.get(URL + endpoint);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchOneData(endpoint: Endpoint, id: string) {
  try {
    const response = await axios.get(URL + endpoint + `/${id}`);
    const { data } = response;
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
