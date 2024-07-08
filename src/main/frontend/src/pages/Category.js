import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const { categoryName } = useParams();

    return (
        <div>
            <h2>{categoryName.replace(/-/g, ' ')}</h2>
            {/* Add the content specific to this category */}
        </div>
    );
};

export default Category;