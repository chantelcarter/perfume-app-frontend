import React from 'react'
import { NavLink } from "react-router-dom";

const NewestArrivals = ({ perfumes }) => {
  return (
    <>
        <div className='newest-arrivals-container'>
            <h4 className='arrivals-header'>Newest Arrivals</h4>
            <hr/>
            {
                perfumes.map((perfume) => (
                    <div key={perfume.id}>
                        <NavLink
                        to={`/perfumeshow/${perfume.id}`}
                        className="nav-link"
                        >
                            <h6>{perfume.name} by {perfume.designer}</h6>
                        </NavLink>
                        <p>Scent Category: {perfume.category}</p>   
                    </div>
                )).slice(-3)
            }
            <hr/>
            <NavLink to={`/perfumeindex`}>
                <h6>View All Perfumes</h6>
            </NavLink>
        </div>
    </>
  )
}

export default NewestArrivals