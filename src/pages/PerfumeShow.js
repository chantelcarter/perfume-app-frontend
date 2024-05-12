import React from "react";
import { useParams, NavLink } from "react-router-dom";
// import { Button } from "reactstrap";
import Recommendations from "../components/Recommendations";

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
        <hr/>
        <p>If you like <b>{currentPerfume.name}</b>, we recommend you try:</p>
        <Recommendations perfumes={perfumes.filter(perfume => perfume.category === currentPerfume?.category)} currentPerfume={currentPerfume?.id} />
        <hr/>
      </div>
    </>
  );
};

export default PerfumeShow;