import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const PerfumeIndex = ({ perfumes }) => {
  return (
    <>
      <div className="index-body">
        <h1>Perfume Collection</h1>
        <div className="card-body">
          {perfumes?.map((perfume, index) => {
            return (
              <Card key={index} className="card">
                <CardTitle>
                  <b>{perfume.name}</b>
                </CardTitle>
                <CardSubtitle>
                      by {perfume.designer}
                    </CardSubtitle>
                <CardImg
                  src={perfume.image}
                  alt=""
                  className="card-image"
                />
                <CardBody>
                  <div className="card-text">
                    <CardSubtitle>
                      Scent Category: {perfume.category}
                    </CardSubtitle>
                  </div>
                  <NavLink
                    to={`/perfumeshow/${perfume.id}`}
                    className="nav-link"
                  >
                    <Button className="card-button">More Details</Button>
                  </NavLink>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </>
    
  );
};

export default PerfumeIndex;

