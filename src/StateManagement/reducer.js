<<<<<<< Updated upstream
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER": {
      return { ...state };
    }
    default: {
      return { ...state };
=======

const reducer = (state, action)=>{
    switch(action.type){
        case "UPDATE_USER": {
        return {...state}
        }
        default:{
            return{...state}
        }
>>>>>>> Stashed changes
    }
  }
};

export default reducer;
