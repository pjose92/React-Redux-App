import { PAGE_CHANGE, FETCHING_BREWERY_START, FETCHING_BREWERY_SUCCESS, FETCHING_BREWERY_FAILURE } from "../actions"

const initialState = {
    brewery: [],
    url: 'https://api.openbrewerydb.org/breweries',
    isFetching: false,
    error: ''
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCHING_BREWERY_START:
            return {
            ...state,
            isFetching: true,
            error: ''
        }   
        case FETCHING_BREWERY_SUCCESS:
            return {
                ...state,
                brewery: action.payload,
                isFetching: false
        }
        case FETCHING_BREWERY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
        }
        case PAGE_CHANGE:
            return {
                ...state,
                url: `https://api.openbrewerydb.org/breweries?page=${action.payload}&per_page=25`
        }
         default:
             return state;            
    }
}

