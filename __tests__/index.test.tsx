import { render, screen } from "@testing-library/react";
import {describe, it, expect} from "@jest/globals";
import "@testing-library/jest-dom";
import { Contacts } from "src/components";

describe("Home", () => {
  it("Render a Contacts component", () => {
    render(<Contacts />);

    const heading = screen.getByRole("Contacts");

    expect(heading).toBeInTheDocument();
  });
});
