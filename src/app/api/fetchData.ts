import axios from "axios";

const URL = "http://localhost:3001/graphql";

export async function fetchData() {
  try {
    const response = await axios.get(URL);
    const { data } = response;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
