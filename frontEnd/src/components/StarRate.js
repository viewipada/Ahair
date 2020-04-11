import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'


const Home = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const handleChange=(props)=>{
        props.getStar(rating);
    }
    return (
        <div className="starRate">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => {setRating(ratingValue); handleChange(props);}}
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
