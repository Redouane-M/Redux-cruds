const initialState = {
    villes: [
      { id: 1, nom: 'casablanca' },
      { id: 2, nom: 'rabat' },
      { id: 3, nom: 'agadir' }
    ],
    users: [
      { id: 1, name: 'Mohamed Allaoui', email: 'allaoui@gmail.com', ville: 'casablanca' },
      { id: 2, name: 'Hind Benanni', email: 'benani@gmail.com', ville: 'rabat' }
    ]
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload]
        };
  
      case 'UPDATE_USER':
        return {
          ...state,
          users: state.users.map((item) =>
            item.id === action.payload.id
              ? { ...item, name: action.payload.name, email: action.payload.email, ville: action.payload.ville }
              : item
          )
        };
  
      case 'DELETE_USER':
        return {
          ...state,
          users: state.users.filter((u) => u.id !== parseInt(action.payload))
        };
  
      case 'FILTER_USER':
        return {
          ...state,
          usersFilter: state.users.filter((u) => u.ville !== action.payload.ville)
        };
        case "CLEAR_USER":
      return { ...state, usersFilter: [], users: [] };
  
      default:
        return state;
    }
  };
  
  export default reducer;