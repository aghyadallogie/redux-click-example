export const updateClicks = (payload) => {
  console.log(
    'THE ACTION CREATOR UPDATE_CLICKS WILL RETURN AN ACTION TO THE REDUCER'
  );
  return {
    type: 'UPDATE_CLICKS',
    payload,
  };
};
