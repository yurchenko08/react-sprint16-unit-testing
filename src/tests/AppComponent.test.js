import React from "react";
import renderer from "react-test-renderer";
import App from "../components/App";

describe("Test component App", () => {
  let componentApp;
  beforeEach(() => {
    componentApp = renderer.create(<App />);
  });

  it("Render corectly", () => {
    expect(componentApp.toJSON()).toMatchSnapshot();
  });

  it("Check type", () => {
    expect(componentApp.toJSON().type).toBe("div");
  });
});
// // TODO: Your test need to be here instead of fake tests
