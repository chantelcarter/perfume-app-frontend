import React from "react";
import {  Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const PerfumeIndex = ({ perfumes }) => {
  return (
    <>
      <div className="index-body">
        <h1>Perfume Collection</h1>
        <div className="index-container">
          {perfumes?.map((perfume, index) => {
            return (
              <div className="index-content">
                <div>
                  <img
                    src={perfume.image}
                    alt="perfume"
                    className="item-image"
                  />
                </div>
                <div className="item-info">
                  <p>
                    <b>{perfume.name}</b>
                  </p>
                  <p>by {perfume.designer}</p>
                  <p>Scent Category: {perfume.category}</p>
                  <NavLink
                    to={`/perfumeshow/${perfume.id}`}
                    className="nav-link"
                  >
                    <Button className="card-button">More Details</Button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
    
  );
};

export default PerfumeIndex;

