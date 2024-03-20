import { render, screen } from "@testing-library/react";
import PerfumeProtectedIndex from "../pages/PerfumeProtectedIndex";
import { BrowserRouter } from "react-router-dom";

describe("<PerfumeProtectedIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      id: 1,
      email: "test1@example.com"
    }

    const userPerfumes = [
      {
        id: 1,
        name: "Accident À La Vanille",
        designer: "Jousset Parfums",
        category: "Gourmand",
        top_notes: "Vanilla",
        middle_notes: "Vanilla, Sandalwood",
        base_notes: "Vanilla, Styrax",
        image: "https://fimgs.net/mdimg/perfume/375x500.68076.jpg",
        user_id: 1
      }
    ]

    render(
      <BrowserRouter>
        <PerfumeProtectedIndex
          perfumes={userPerfumes}
          currentUser={currentUser}
        />
      </BrowserRouter>
    )

    
  })

  it("renders without crashing", () => {
    const element = screen.getByText("My Collection")
    expect(element).toBeInTheDocument()
  })

  
  it("renders a button", () => {
    render(
        <BrowserRouter>
            <PerfumeProtectedIndex />
        </BrowserRouter>
     )
     expect(screen.getByRole('button', {name: /more details/i})).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /edit perfume/i})).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /delete perfume/i})).toBeInTheDocument()
  })
})