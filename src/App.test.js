import { render, screen, waitFor } from "@testing-library/react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { MemoryRouter } from 'react-router-dom';


describe("<App />", () => {
  it("renders an nav list", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const list = screen.getByRole("list")
    expect(list).toBeInTheDocument()
  })

  it('renders Index component when "/apartmentindex" route is accessed', () => {
    render(
      <MemoryRouter initialEntries={['/perfumeindex']}>
        <App />
      </MemoryRouter>
    );
    const index = screen.getByText("View Perfumes")
    expect(index).toBeInTheDocument();
  });
})