import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ReviewList() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/reviews')
            .then(response => setReviews(response.data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    const handleDelete =(id) =>{
        axios.delete('http://localhost:8081/reviews/delete/'+id)
            .then(res => {
                location.reload();
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Reviews</h1>
            <Link to="/review/create">Create Review</Link>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h3>{review.person}</h3>
                        <p>{review.description}</p>
                        <Link to={`/review/edit/${review.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(review.id)} className='btn btn-sm btn-danger'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ReviewList;
