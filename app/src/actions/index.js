import axios from "axios";

export const FETCHING_BREWERY_START = "FETCHING_BREWERY_START";
export const FETCHING_BREWERY_SUCCESS = "FETCHING_BREWERY_SUCCESS";
export const FETCHING_BREWERY_FAILURE = "FETCHING_BREWERY_FAILURE";
export const PAGE_CHANGE = "PAGE_CHANGE";

export const getBrewery = (url) => dispatch => {
    dispatch({ type: FETCHING_BREWERY_START });
    axios
    .get(url)
    .then(res => {
        console.log("Line 13 in index.js actions folder", res);
        dispatch({ type: FETCHING_BREWERY_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: FETCHING_BREWERY_FAILURE, payload: err.message })
    })
}

export const pageChange = (number) => {
    return {
        type: PAGE_CHANGE,
        payload: number
    }
}