// define constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state

const initialState = { count: 0 };
const initialState2 = { users: [{ name: "Shaikat Chandra Paul" }] };


// actions
const IncrementCounter = () => {
    return {
        type: INCREMENT,
      }
}
const DecrementCounter = () => {
    return {
        type: DECREMENT,
      }
}
  
  const addUser = () => {
    return {
        type: ADD_USER,
        payload: {
          name: "rafiqul islam",
        }
      }
  }