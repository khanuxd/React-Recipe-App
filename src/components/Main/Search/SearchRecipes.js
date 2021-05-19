import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

import '../Main.css';

const SearchRecipes = ({ searchInput, searchValue }) => {
    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search here"
                className="mr-2"
                aria-label="Search"
                onChange={searchInput}
                value={searchValue}
            />

        </Form>
    );
};

export default SearchRecipes;