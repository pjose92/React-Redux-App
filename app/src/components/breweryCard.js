import React from 'react';

import { Card, Icon } from 'semantic-ui-react';

const BreweryCard = (props) => {
    const {name, brewery_type, city, state, country, website_url } = props.item
    console.log("line 7 breweryList.js props", props)

    return (
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>Location: {city}, {state} <br/> {country}</Card.Description>
                <Card.Description>Brewery Type: {brewery_type}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a href={website_url} alt="brewery website">
                    {website_url}
                </a>
            </Card.Content>
        </Card>
    )
}

export default BreweryCard;