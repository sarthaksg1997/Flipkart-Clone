import axios from "axios";

const url = "";

export const getProducts = () => async (dispatch) => {
  try {
    const {data} = await axios.get(`${url}/products`);
    dispatch({type:'getProductssuccess', payload:data});  // DISPATCH ALWAYS CALL REDUCER.
  } catch (error) {
    dispatch({type:'getProductsfail', payload:error.message});
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const {data} = await axios.get(`${url}/product/${id}`);
    dispatch({type:'getProductDetailssuccess', payload:data});  // DISPATCH ALWAYS CALL REDUCER.
  } catch (error) {
    dispatch({type:'getProductDetailsfail', payload:error.message});
  }
};
