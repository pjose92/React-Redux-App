import { PAGE_CHANGE, FETCHING_BREWERY_START, FETCHING_BREWERY_SUCCESS, FETCHING_BREWERY_FAILURE } from "../actions"

const intialState = {
    brewery: [],
    url: 'https://api.openbrewerydb.org/breweries?page=1&per_page=12',
    error: 'error, error!'
}

export const reducer = (state=intialState, action) => {
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
                url: `https://api.openbrewerydb.org/breweries?page=${action.payload}&per_page=12`
        }
         default:
             return state;            
    }
}

