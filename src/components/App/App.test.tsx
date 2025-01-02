import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"

describe("Given the App component", () => {
  describe("When rendered ", () => {
    test("Then it should show the Home page", () => {
      render(<App />);

      const heading = screen.getByRole("heading", {
        name: /Bienvenidx a StoryWeave/i
      });
      
      expect(heading).toBeVisible();
    });
  });
});
