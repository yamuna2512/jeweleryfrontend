const initialState = {
  user: {
    id: null,
    first_name: "",
    last_name: "",
    email: "",
    token: "",
    errors: {
      email: null,
      password: null,
    },
  },

  
  categories: {
    list: [],
  },

  products: {
    list: [],
  },

  cart: {
    results: [],
    totalPrice: 0,
    totalCart: 0,
    totalCartItems: 0,
  },
};

export default initialState;
