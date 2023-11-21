import { ITEMS } from "./actionType";
const BASE_URL = "https://fakestoreapi.com/products"
import axios from "axios";

export const items = () => {
    return {
        type: ITEMS
    }
}

export function getAllItem() {
    return async (dispatch) => {
        try {
            const response = await axios.get(BASE_URL);
            dispatch({ type: ITEMS, payload: response.data });
        } catch (error) {
            // Handle error appropriately (e.g., dispatch an error action)
            console.error('Error fetching items:', error);
        }
    };
}