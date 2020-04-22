import React, { useState,useEffect } from 'react';
import { FaStar } from 'react-icons/fa'


const Home = (props) => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    useEffect(() => {
        props.getStar(rating);
     }, [rating]);
    
    return (
        <div className="starRate">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label >
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            className="starInput"
                            onClick={() => {setRating(ratingValue);}}
                        />
                        <FaStar
                            className="star"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={50}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
}


export default Home;
