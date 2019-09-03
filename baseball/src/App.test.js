import React from 'react';
import App from './App';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const simulatedDOM = rtl.render(<App />);

  //Check if buttons exist
  const divButtons = document.querySelector("div.buttons");
  const strikeButton = document.querySelector("div.buttons button.strike");
  expect(strikeButton).toBeInTheDocument();

  const foulButton = document.querySelector("div.buttons button.foul");
  expect(foulButton).toBeInTheDocument();

  const ballButton = document.querySelector("div.buttons button.ball");
  expect(ballButton).toBeInTheDocument();

  const hitButton = document.querySelector("div.buttons button.hit");
  expect(hitButton).toBeInTheDocument();

  console.log(simulatedDOM.debug());
});

