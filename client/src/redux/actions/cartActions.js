import axios from "axios";

const url = "http://localhost:8000";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/product/${id}`);
    dispatch({ type: "addSuccessfully", payload: data });
  } catch (error) {
    console.log('Error while calling add to cart api');
  }
};

export const removeItemsFromCart = (id) => (dispatch) => {
  dispatch({type: "removeSuccessfully", payload:id})
}
