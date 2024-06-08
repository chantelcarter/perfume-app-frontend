import React from 'react'
import { NavLink } from "react-router-dom";

const Recommendations = ({ perfumes, currentPerfume }) => {
    const recommendations = perfumes.filter(perfume => perfume.id !== currentPerfume)
  return (
    <div className='recommendations-container'>
        {
            recommendations.map((perfume) => (
                <div className='recommendations-content'>
                    <NavLink
                    to={`/perfumeshow/${perfume.id}`}
                    className="nav-link"
                    >
                        <div>
                            <img className='recommendations-image' src={perfume.image} alt='perfume'/>
                        </div>
                        <div className='recommendations-info'>
                            <h5>{perfume.name}</h5>
                            <p>by {perfume.designer}</p>   
                        </div>  
                    </NavLink>
                        
                </div>
            ))
        }
    </div>
  )
}

export default Recommendations