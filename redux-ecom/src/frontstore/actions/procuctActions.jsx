import axios from "../../api/axiosconfig";
import { loadproducts } from "../reducers/productSlice";

export const asyncLoadProducts =()=> async (dispatch, getState) => {
    try {
        const {data} = await axios.get("/products");
        dispatch(loadproducts(data));
    } catch (error) {
        console.log(error);
    }
}

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    const {data} = await axios.post("/products",product);
    dispatch(asyncLoadProducts());
    console.log(data);
    }catch (error) {
        console.log(error);
    }
};
export const asyncUpdateProduct = (id,product) => async (dispatch, getState) => {
  try {
    const {data} = await axios.patch(`/products/${id}`,product);    
    dispatch(asyncLoadProducts());
    console.log(data);
    }catch (error) {
        console.log(error);
    }
};
export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
  try {
    const {data} = await axios.delete(`/products/${id}`);    
    dispatch(asyncLoadProducts());
    console.log(data);
    }catch (error) {
        console.log(error);
    }
};
