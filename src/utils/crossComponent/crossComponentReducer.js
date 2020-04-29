const initialState = {
  componensAreMounted: false,
};


const crossComponentReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGE_ARE_MOUNTED':
    return Object.assign({}, state, {
      componensAreMounted: action.payload.areMounted,
    });
  default:
    return state;
  }
};


export default crossComponentReducer;
