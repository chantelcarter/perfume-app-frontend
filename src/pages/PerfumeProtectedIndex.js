import React from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { NavLink } from "react-router-dom"

const PerfumeProtectedIndex = ({ perfumes, currentUser, deletePerfume }) => {
  const myPerfumes = perfumes?.filter(perfume => perfume.user_id === currentUser.id)

  return (
    <div className='perfumes-body'>
      <h1>My Collection</h1>
        <NavLink to="/perfumenew" className="nav-link">Add a New perfume</NavLink>
      <div className='flex-perfumes'>
          {myPerfumes?.map((perfume, index) => {
            return(
                <Card key={index} className='perfume-cards'>
                  <CardTitle>
                    <b>{perfume.name}</b>
                  </CardTitle>
                  <CardSubtitle>
                    by {perfume.designer}
                  </CardSubtitle>
                  <CardImg top width="100%" src={perfume.image} alt="" className="perfume-picture"/>
                  <CardBody>
                    <div className="perfume-text">
                      <CardSubtitle>
                        Category: {perfume.category}
                      </CardSubtitle>  
                    </div>
                    <NavLink to={`/perfumeshow/${perfume.id}`} className="nav-link">
                      <Button className='perfume-button'>More Details</Button>
                    </NavLink>
                    <NavLink to={`/perfumeedit/${perfume.id}`}>
                      <Button className='perfume-button'>Edit Perfume</Button>
                    </NavLink>
                    <Button onClick={() => deletePerfume(perfume.id)} className='perfume-button'>Delete Perfume</Button>
                  </CardBody>
                </Card>
            )
          })}
        </div>
    </div>
  )
}

export default PerfumeProtectedIndex