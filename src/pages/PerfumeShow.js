import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const PerfumeShow = ({ perfumes }) => {
  let { id } = useParams();
  const currentPerfume = perfumes?.find((perfume) => perfume.id === +id);

  return (
    <>
      <div className="show-body">
        <div className="show-link-back">
            <NavLink to={`/perfumeindex`}>
              Back to Perfumes
            </NavLink>
          </div>
        <div className="show-container">
          <img className="show-image" src={currentPerfume?.image} alt="bottle of perfume"/>
          <div className="show-content">
            <div className="show-name">
              <h2>{currentPerfume?.name}</h2>
              <h3>by {currentPerfume?.designer}</h3>
              <div>
                <b>Scent Category:</b> {currentPerfume?.category}
              </div>
            </div>

            <div className="show-notes">
              <hr/>
              <div className="show-note-item">
                <b> Top Notes:</b> {currentPerfume?.top_notes}
              </div>
              <div className="show-note-item">
                <b> Middle Notes:</b> {currentPerfume?.middle_notes}
              </div>
              <div className="show-note-item">
                <b> Base Notes:</b> {currentPerfume?.base_notes}
              </div>
              <hr/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfumeShow;