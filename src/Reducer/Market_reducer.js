// import * as ActionTypes from  '../Action/types';

// const intialState = {
// loading: false,
// error: null,
// message: '',
// marketarray: [],
// volunteersarray: [],
// productarray: []

// };

// export default (state = intialState, action) => {

// switch (action.type) {
// case ActionTypes.FETCH_MARKET_BEGIN:
// return { ...state, loading: true, error: null };
// case ActionTypes.FETCH_MARKET_SUCCESS:
// return { ...state, loading: false, marketarray: action.payload };
// case ActionTypes.FETCH_MARKET_FAILURE:
// return { ...state, loading: false, error: action.payload.message }

// // rst
// case ActionTypes.FETCH_VOLUNTEERS_BEGIN:
// // debugger;
// return { ...state, loading: true, error: null };
// case ActionTypes.FETCH_VOLUNTEERS_SUCCESS:
// return { ...state, loading: false, volunteersarray: action.payload };

// // food
// case ActionTypes.FETCH_PRODUCTS_BEGIN:
// return { ...state, loading: true, error: null };
// case ActionTypes.FETCH_PRODUCTS_SUCCESS:
// return { ...state, loading: false, productarray: action.payload };


// default:
// return state;
// }
// };