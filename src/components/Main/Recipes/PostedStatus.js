import React from 'react';

import '../../../Pages/Recipe/AddNewRecipe.css';

const closeHandler = () => {
    window.location.reload();
}

const PostedStatus = ({ name }) => {
    return (
        <div className="overlay">
            <div className="postedUpdate">
                <button onClick={closeHandler}>X</button>
                <p> Your recipe <span>{name}</span> posted successfully</p>
            </div>
        </div>
    );
};

export default PostedStatus;