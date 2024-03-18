import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import PerfumeNew from "../pages/PerfumeNew"
import React from "react"
import mockUsers from '../mockUsers'

describe("<PerfumeNew />", () => {
    it("renders the form", () => {
        render(
            <BrowserRouter>
                <PerfumeNew currentUser={mockUsers[0]} />
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        expect(screen.getByText(/name:/i)).toBeInTheDocument()
        expect(screen.getByText(/designer:/i)).toBeInTheDocument()
        expect(screen.getByText(/category:/i)).toBeInTheDocument()
        expect(screen.getByText(/top notes:/i)).toBeInTheDocument()
        expect(screen.getByText(/middle notes:/i)).toBeInTheDocument()
        expect(screen.getByText(/base notes:/i)).toBeInTheDocument()
        expect(screen.getByText(/image url:/i)).toBeInTheDocument()
    })  

    it("renders the button", () => {
        render(
            <BrowserRouter>
                <PerfumeNew currentUser={mockUsers[0]}/>
            </BrowserRouter>
        )
        
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
    })
}) 