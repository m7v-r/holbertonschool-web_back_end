import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
getFullResponseFromAPI(false).catch((error) => console.log(error.message));
