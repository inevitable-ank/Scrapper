import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [url, setUrl] = useState('');
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/reviews?page=${encodeURIComponent(url)}`);
            setReviews(response.data.reviews);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    return (
        <div className="App">
            <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter product page URL"
            />
            <button onClick={fetchReviews}>Get Reviews</button>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <h4>{review.title}</h4>
                        <p>{review.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
