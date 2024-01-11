export const addUserAction = (user) => {
    return { type: 'ADD_USER', payload: user };
  };
  
  export const updateUserAction = (user) => {
    return { type: 'UPDATE_USER', payload: user };
  };
  
  export const deleteUserAction = (id) => {
    return { type: 'DELETE_USER', payload: id };
  };
  
  export const filterUserAction = (ville) => {
    return { type: 'FILTER_USER', payload: ville };
  };
  export const clearuseraction=(id)=>{
    return{type:'CLEAR-USER',payload:id}
  }