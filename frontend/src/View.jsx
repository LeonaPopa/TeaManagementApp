import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function View(){
    const {id} = useParams();
    const [tea, setTea] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/view/'+id)
            .then(res =>{
                setTea(res.data);
            })
            .catch(err => console.log(err))
    }, [id])
    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Tea Detail</h2>
                <h2>{tea.id}</h2>
                <h2>{tea.name}</h2>
                <h2>{tea.level}</h2>
                <Link to="/" className='btn btn-primary'>Back</Link>
                <Link to={`/edit/${tea.id}`} className='btn btn-primary'>Edit</Link>
            </div>
        </div>
    )
}

export default View