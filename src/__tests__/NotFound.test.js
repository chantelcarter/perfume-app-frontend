import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import { BrowserRouter } from 'react-router-dom'

describe("<NotFound />", () => {
  it("renders a header", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('heading', {name: /404: not found/i})).toBeInTheDocument()
  })

  it("renders text", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/we're sorry\. the page you are looking for does not exist or has been removed\./i)).toBeInTheDocument()
  })

  it("renders a link to home page", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {name: /please return to the homepage\./i})).toBeInTheDocument()
  })
})