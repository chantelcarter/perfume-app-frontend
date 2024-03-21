import { render, screen } from "@testing-library/react"
import PerfumeEdit from "../pages/PerfumeEdit"
import { BrowserRouter } from "react-router-dom"
import mockPerfumes from "../mockPerfumes.js"

describe("<PerfumeEdit />", () => {
  it("renders a form to update perfume", () => {
    render(
      <BrowserRouter>
        <PerfumeEdit perfumes={mockPerfumes} updatePerfume={() => {}} />
      </BrowserRouter>
    )
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /designer/i})).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /category/i})).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /top notes/i})).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /middle notes/i})).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /base notes/i})).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /image url/i})).toBeInTheDocument()
  })

  it("renders a button", () => {
    render(
      <BrowserRouter>
        <PerfumeEdit perfumes={mockPerfumes} updatePerfume={() => {}} />
      </BrowserRouter>
    )
    expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument()
  })
})