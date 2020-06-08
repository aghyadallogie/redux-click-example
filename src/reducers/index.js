// Initial State

const initialState = {
  clicked: 0,
};

// Set up reducers behaviour
const clickReducer = (state = initialState, action) => {
  console.log('THE REDUCER IS RUNNING');
  console.log('ACTION INSIDE REDUCER', action);

  if (action.type === 'UPDATE_CLICKS') {
    // it does something
    const clicks = state.clicked + 1;
    return { ...state, clicked: clicks };
  }

  return state;
};

export default clickReducer;
