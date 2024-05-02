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
                <NavLink
                  to={`/perfumeshow/${perfume.id}`}
                  className="nav-link"
                >
                  <div>
                    <img
                      src={perfume.image}
                      alt="perfume"
                      className="item-image"
                    />
                  </div>
                  <div className="item-info">
                    <h5>{perfume.name}</h5>
                    <p>by {perfume.designer}</p>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
    
  );
};

export default PerfumeIndex;

