import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const PerfumeEdit = ({ currentUser, perfumes, updatePerfume }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const perfume = perfumes.find(
    (perfume) => perfume.id === parseInt(id)
  )

  const [perfumeFromData, setPerfumeFormData] = useState({
    name: perfume?.name || "",
    designer: perfume?.designer || "",
    category: perfume?.category || "",
    top_notes: perfume?.top_notes || "",
    middle_notes: perfume?.middle_notes || "",
    base_notes: perfume?.base_notes || "",
    image: perfume?.image || "",
    user_id: currentUser?.id,
  })

  const handleChange = (e) => {
    setPerfumeFormData({ ...perfumeFromData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updatePerfume(perfumeFromData, perfume.id)
    navigate("/myperfumes")
  }

  return (
    <div className="content-body">
      <div className="form-container">
        <h1>Update Perfume</h1>
        <Form className="form">
          <div className="form-group-container">
            <FormGroup className="form-group">
              <Label for="name">Name:</Label>
              <Input
                id="name" 
                type="text"
                name="name"
                className="form-input"
                onChange={handleChange}
                value={perfumeFromData.name}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label for="designer">Designer:</Label>
              <Input
                id="designer" 
                type="text"
                name="designer"
                className="form-input"
                onChange={handleChange}
                value={perfumeFromData.designer}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label for="category">Category:</Label>
              <Input
                id="category" 
                type="text"
                name="category"
                className="form-input"
                onChange={handleChange}
                value={perfumeFromData.category}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label for="top_notes">Top Notes:</Label>
              <Input
                id="top_notes" 
                type="text"
                name="top_notes"
                className="form-input"
                onChange={handleChange}
                value={perfumeFromData.top_notes}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label for="middle_notes">Middle Notes:</Label>
              <Input
                id="middle_notes"
                type="text"
                name="middle_notes"
                className="form-input"
                onChange={handleChange}
                value={perfumeFromData.middle_notes}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label for="base_notes">Base Notes:</Label>
              <Input
                id="base_notes"
                type="text"
                name="base_notes"
                className="form-input"
                onChange={handleChange}
                value={perfumeFromData.base_notes}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label for="image">Image URL</Label>
              <Input
                id="image"
                type="text"
                name="image"
                className="form-input"
                onChange={handleChange}
                value={perfumeFromData.image}
              />
            </FormGroup>
          </div>
          <div className="submit">
            <Button onClick={handleSubmit} type="submit" className="new-button">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default PerfumeEdit