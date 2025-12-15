export const getProducts = (state) => {
  return state.product?.list || [];
};
