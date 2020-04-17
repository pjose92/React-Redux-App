import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import BreweryCard from './breweryCard'
import { getBrewery, pageChange } from '../actions'
import ChangePage from './changepage'

const BreweryList = (props) => {
    console.log("breweryList.js line 9", props)
    const { getBrewery, brewery, isFetching, url, pageChange } = props

    useEffect(() => {
        getBrewery(url);
    }, [url])

    const handlePageChange = (number) => {
        pageChange(number);
    }

    if (isFetching) {
        return<h1>Brewery Is Now Loading!</h1>
    }

    return (
        <>
            <ChangePage handlePageChange={handlePageChange} />
            <div className="cardContainer">
                {brewery.map(item =>
                    <BreweryCard
                        key={item.id}
                        item={item}
                    />
                    )}
            </div>
            <ChangePage handlePageChange={handlePageChange} />
        </>
    )
}

const mapStateToProps = state => {
    console.log('initial', state)
    return {
        brewery: state.brewery,
        url: state.url,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps, {
        getBrewery, pageChange
    }
)(BreweryList);