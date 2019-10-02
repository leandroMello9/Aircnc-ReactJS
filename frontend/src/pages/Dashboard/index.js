import React,{useEffect, useState} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom'
import './style.css'


export default function Dashboard() {
    const [spots, setSots] = useState([]);

    useEffect(() => {
      async function loadSpots() {
        const user_id = localStorage.getItem('user');
        const response = await api.get('/dashboard', {
            headers: {user_id}
        });
       
        setSots(response.data);
      }
      loadSpots();
    }, [])
    return(
        <>
        <ul className="spot-list">
            {spots.map(spot => (
                <li key={spot._id}>
                    <header style={{backgroundImage: `url(${spot.thumbnail_url})`}}/>
                    <strong>{spot.company}</strong>
                    <span>{spot.price ? `R$ ${spot.price}/dia` : 'Gratuito'}</span>

                </li>
            ))}
        </ul>
        
        <Link to="/new">
            <button className="btn">Cadastrar novo Spot.</button>
        </Link>
        
        </>
    )
}