import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
function Home(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete =(id) =>{
        axios.delete('http://localhost:8081/delete/'+id)
            .then(res => {
                location.reload();
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Tea List</h2>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success'></Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Level of Spice</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((tea, index)=>{
                            return <tr key={index}>
                                <td>{tea.id}</td>
                                <td>{tea.name}</td>
                                <td>{tea.level}</td>
                                <td>
                                    <Link  to={`/view/${tea.id}`} className='btn btn-sm btn-info'>View</Link>
                                    <Link to={`/edit/${tea.id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                    <button onClick={ ()=>handleDelete(tea.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home