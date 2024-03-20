import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const PerfumeShow = ({ perfumes }) => {
  let { id } = useParams();
  const currentPerfume = perfumes?.find((perfume) => perfume.id === +id);

  return (
    <>
      <div className="show-body">
        <div className="show-contents">
          <img className="show-image" src={currentPerfume?.image} alt="bottle of perfume"/>
          <h2 className="show-name">{currentPerfume?.name}</h2>
          <h3 className="show-designer">by {currentPerfume?.designer}</h3>
            <br />
            <b className="card-sections"> Top Notes:</b> {currentPerfume?.top_notes}
            <br />
            <b className="card-sections"> Middle Notes:</b> {currentPerfume?.middle_notes}
            <br />
            <b className="card-sections"> Base Notes:</b> {currentPerfume?.base_notes}
        </div>
        <br />
        <NavLink to={`/perfumeindex`}>
          <Button className="button">Back to Perfumes</Button>
        </NavLink>
      </div>
    </>
  );
};

export default PerfumeShow;