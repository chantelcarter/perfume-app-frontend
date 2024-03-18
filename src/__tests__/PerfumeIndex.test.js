import { render, screen } from "@testing-library/react";
import PerfumeIndex from "../pages/PerfumeIndex";
import { BrowserRouter } from "react-router-dom";
import mockPerfumes from "../mockPerfumes";

describe("<PerfumeIndex />", () => {
  it("renders all perfumes", () => {
    render(
      <BrowserRouter>
        <PerfumeIndex perfumes={mockPerfumes} />
      </BrowserRouter>
    );

    screen.logTestingPlaygroundURL()
    mockPerfumes.forEach((perfume) => {
      expect(screen.getByText(`${perfume.name}`)).toBeInTheDocument();
      expect(screen.getByText(`by ${perfume.designer}`)).toBeInTheDocument();
      // expect(screen.getAllByText(/scent category: \{perfume\.category\}/i)).toBeInTheDocument();
    });
  });
});