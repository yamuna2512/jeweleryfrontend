const initialState = {
  user: {
    id: null,
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
