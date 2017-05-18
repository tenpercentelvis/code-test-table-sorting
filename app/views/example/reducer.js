
const defaultState = {
  items: [],
};

const example = (state = defaultState, action) => {

  switch (action.type) {

    case 'getData':
      return Object.assign({}, state, {
        ...action.data,
      });

    default:
      return state;

  }

};

export default example;
