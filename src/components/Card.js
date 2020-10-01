import React from 'react';


const Card = ({ name, email, id}) => {
    return (

        <div className='bg-light-green tc dib br3 pa3 ma2 bw2 shadow-5'>
            <img alt='photo' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <a href={"mailto:" + email}>{email}</a>
            </div>
        </div>

    );
};

export default Card;