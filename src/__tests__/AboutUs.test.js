import { render, screen } from '@testing-library/react';
import AboutUs from '../pages/AboutUs'
import { BrowserRouter } from 'react-router-dom'
import about from "../assets/relaxing-orange-flower.jpg"

describe("<AboutUs />", () => {
  it("renders an image", () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    expect(screen.getByRole("img")).toHaveAttribute("src", about)
  })
})