import React from "react";
import * as rtl from "@testing-library/react";
import App from "../App";

it('App renders "World Cup" text', () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getByText(/World Cup/i));
});
