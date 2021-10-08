export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "getProductssuccess":
      return { products: action.payload };
    case "getProductsfail":
      return { error: action.payload };
    default:
      return state;
  }
};

export const getProductDetailsReducer= (state = { product: {} }, action) =>{
  switch (action.type) {
    case "getProductDetailssuccess":
      return { product: action.payload };
    case "getProductDetailsfail":
      return { error: action.payload };
    default:
      return state;
  }
}
