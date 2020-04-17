import React from 'react';
import { Pagination } from 'semantic-ui-react';

const ChangePage = (props) => {
    return (
        <Pagination 
            defaultActivePage={1}
            totalPages={12}
            onPageChange={(data) => props.handlePageChange(data.activePage)
            }
        />
    )
}

export default ChangePage;