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
       {currentUser?.id && (
        <div className="form-container">
          <h1>Add a Perfume</h1>
          <Form className="form">
            <FormGroup className="form-group-name">
              <Label for="name">Name: </Label>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={myPerfume.name}
              />
            </FormGroup>
            <FormGroup className="form-group-sci-name">
              <Label for="designer">Designer: </Label>
              <Input
                type="text"
                name="designer"
                onChange={handleChange}
                value={myPerfume.designer}
              />
            </FormGroup>
            <FormGroup className="form-group-summary">
              <Label for="category">Category: </Label>
              <Input
                type="text"
                name="category"
                onChange={handleChange}
                value={myPerfume.category}
              />
            </FormGroup>
            <FormGroup className="form-group-benefit">
              <Label for="top_notes">Top Notes: </Label>
              <Input
                type="text"
                name="top_notes"
                onChange={handleChange}
                value={myPerfume.top_notes}
              />
            </FormGroup>
            <FormGroup className="form-group-warning">
              <Label for="middle_notes">Middle Notes: </Label>
              <Input
                type="text"
                name="middle_notes"
                onChange={handleChange}
                value={myPerfume.middle_notes}
              />
            </FormGroup>
            <FormGroup className="form-group-warning">
              <Label for="base_notes">Base Notes: </Label>
              <Input
                type="text"
                name="base_notes"
                onChange={handleChange}
                value={myPerfume.base_notes}
              />
            </FormGroup>
            <FormGroup className="form-group-image">
              <Label for="form-image">Image URL: </Label>
              <Input
                type="text"
                name="image"
                onChange={handleChange}
                value={myPerfume.image}
              />
            </FormGroup>
            <div className="submit">
              <Button onClick={handleSubmit} className="new-button">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      )}
    </>
  )
} 

export default PerfumeNew