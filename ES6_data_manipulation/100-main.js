import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

try {
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
} catch (error) {
  console.log(error.message);
}
