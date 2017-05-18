
// mock data

import { mockData } from './api-data';

// mock connect to api end point

class api {
  static getData() {

    return new Promise((resolve, reject) => {

      if (resolve) {
        resolve(Object.assign([], mockData));
      } else {
        console.log(reject);
      }

    });

  }
}

export default api;
