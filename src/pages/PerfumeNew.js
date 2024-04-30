import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

const PerfumeNew = ({ createPerfume, currentUser }) => {
  const navigate = useNavigate();
  const [myPerfume, setMyPerfume] = useState({
    name: "",
    designer: "",
    category: "",
    top_notes: "",
    middle_notes: "",
    base_notes: "",
    image: "",
    user_id: currentUser?.id
  });

  const handleChange = (e) => {
    setMyPerfume({...myPerfume, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    createPerfume(myPerfume);
    navigate("/myperfumes");
  }; 

  return (
    <>
      <div className="content-body">
        {currentUser?.id && (
          <div className="form-container">
            <h1>Add a Perfume</h1>
            <Form className="form">
              <div className="form-group-container">
                <FormGroup className="form-group">
                  <Label for="name">Name: </Label>
                  <Input
                    type="text"
                    name="name"
                    className="form-input"
                    onChange={handleChange}
                    value={myPerfume.name}
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="designer">Designer: </Label>
                  <Input
                    type="text"
                    name="designer"
                    className="form-input"
                    onChange={handleChange}
                    value={myPerfume.designer}
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="category">Category: </Label>
                  <Input
                    type="text"
                    name="category"
                    className="form-input"
                    onChange={handleChange}
                    value={myPerfume.category}
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="top_notes">Top Notes: </Label>
                  <Input
                    type="text"
                    name="top_notes"
                    className="form-input"
                    onChange={handleChange}
                    value={myPerfume.top_notes}
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="middle_notes">Middle Notes: </Label>
                  <Input
                    type="text"
                    name="middle_notes"
                    className="form-input"
                    onChange={handleChange}
                    value={myPerfume.middle_notes}
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="base_notes">Base Notes: </Label>
                  <Input
                    type="text"
                    name="base_notes"
                    className="form-input"
                    onChange={handleChange}
                    value={myPerfume.base_notes}
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="form-image">Image URL: </Label>
                  <Input
                    type="text"
                    name="image"
                    className="form-input"
                    onChange={handleChange}
                    value={myPerfume.image}
                  />
                </FormGroup>
              </div>
              <div className="submit">
                <Button onClick={handleSubmit} className="new-button">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        )}
      </div>
    </>
  )
} 

export default PerfumeNew