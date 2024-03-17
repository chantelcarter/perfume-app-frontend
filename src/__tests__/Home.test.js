import { render, screen } from '@testing-library/react';
import Home from '../pages/Home'
import { BrowserRouter } from 'react-router-dom'
import banner from "../assets/flower-banner.png"

describe("<Home />", () => {
  it("renders an image", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole("img")).toHaveAttribute("src", banner)
  })
})