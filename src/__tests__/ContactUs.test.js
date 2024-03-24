import { render, screen } from '@testing-library/react';
import ContactUs from '../pages/ContactUs'
import { BrowserRouter } from 'react-router-dom'
import chantel from "../assets/chantel-photo.jpg"

describe("<ContactUs />", () => {
  it("renders an image", () => {
    render(
      <BrowserRouter>
        <ContactUs />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('img', {name: /team member/i})).toHaveAttribute("src", chantel)
  })

  it("renders a link", () => {
    render(
      <BrowserRouter>
        <ContactUs />
      </BrowserRouter>
    )
    expect(screen.getByRole('link', {name: /email us/i})).toBeInTheDocument()
  })
})