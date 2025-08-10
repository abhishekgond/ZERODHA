// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import Hero from "../src/landing_page/home/Hero";

// describe("Hero component", () => {
//   test("render hero image", () => {
//     render(<Hero />);
//     const heroImage = screen.getByAltText("Hero image");
//     expect(heroImage).toBeInTheDocument();
//     expect(heroImage).toHaveAttribute("src", "/images/homeHero.png");
//   });
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom"; // ✅ Import router
import Hero from "../src/landing_page/home/Hero";

describe("Hero component", () => {
  test("renders hero image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const heroImage = screen.getByAltText("Hero image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "/images/homeHero.png");
  });
});
