export default (state = [], action) => {
  // if(action.type === 'FETCH_POSTS') {
  //   return action.payload;
  // }
  // return state;

  // If there is a variance of types,
  // we will use switch/case
  switch(action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};
