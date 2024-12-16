import * as React from "react";
import { render, screen } from "@testing-library/react";

import TestComponent from "./TestComponent";

describe("TestComponent", () => {
  it("renders TestComponent", () => {
    render(<TestComponent />);

    screen.debug();
  });
});
