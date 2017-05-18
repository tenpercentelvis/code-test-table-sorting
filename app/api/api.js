
import axios from 'axios';

// api data

const url = 'https://goo.gl/JVg03a';

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
};

// connect to api end point using axios get request

class api {

  static getData() {

    return axios.get(url, config)
      .then(response => response.data)
      .then((data) => {
        return {
          items: data.items,
        };
      })

      .catch((error) => {
        throw (error);
      });
  }

}

export default api;
