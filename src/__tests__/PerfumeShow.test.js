import { render, screen } from "@testing-library/react";
import PerfumeShow from "../pages/PerfumeShow";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import mockPerfumes from "../mockPerfumes";

describe("<PerfumeShow />", () => {  
  it("renders one perfume", () => {
    render(
      <MemoryRouter initialEntries={[`/perfumeshow/1`]}>
        <Routes> 
          <Route path="/perfumeshow/:id" element={<PerfumeShow herbs={mockPerfumes} />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/top notes:/i)).toBeInTheDocument();
    expect(screen.getByText(/middle notes:/i)).toBeInTheDocument();
    expect(screen.getByText(/base notes:/i)).toBeInTheDocument();
  });

  it("renders a button", () => {
    render(
      <MemoryRouter initialEntries={[`/perfumeshow/1`]}>
        <Routes> 
          <Route path="/perfumeshow/:id" element={<PerfumeShow herbs={mockPerfumes} />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /back to perfumes/i })).toBeInTheDocument();
  });

  it("renders an image", () => {
    render(
      <MemoryRouter initialEntries={[`/perfumeshow/1`]}>
        <Routes> 
          <Route path="/perfumeshow/:id" element={<PerfumeShow herbs={mockPerfumes} />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('img', {name: /bottle of perfume/i})).toBeInTheDocument();
  });
});